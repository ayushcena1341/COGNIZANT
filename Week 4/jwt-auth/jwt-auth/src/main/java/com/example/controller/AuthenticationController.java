package com.example.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final String SECRET_KEY = "mysecretkey";

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(HttpServletRequest request) {
        System.out.println("🔥 /authenticate endpoint hit");

        String authHeader = request.getHeader("Authorization");
        System.out.println("Authorization Header: " + authHeader);

        Map<String, String> response = new HashMap<>();

        try {
            if (authHeader != null && authHeader.startsWith("Basic ")) {
                String base64Credentials = authHeader.substring("Basic ".length());
                String credentials = new String(Base64.getDecoder().decode(base64Credentials));
                String[] values = credentials.split(":", 2);

                String username = values[0];
                String password = values[1];

                System.out.println("Decoded credentials: " + username + "/" + password);

                // Validate user
                if ("user".equals(username) && "pwd".equals(password)) {
                    String token = Jwts.builder()
                            .setSubject(username)
                            .setIssuedAt(new Date())
                            .setExpiration(new Date(System.currentTimeMillis() + 3600000)) // 1 hour
                            .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                            .compact();

                    response.put("token", token);
                    return response;
                } else {
                    System.out.println("Invalid credentials.");
                    response.put("error", "Invalid credentials.");
                    return response;
                }
            } else {
                System.out.println("Authorization header missing or malformed.");
                response.put("error", "Missing or malformed Authorization header.");
                return response;
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.put("error", "Internal server error.");
            return response;
        }
    }
}
