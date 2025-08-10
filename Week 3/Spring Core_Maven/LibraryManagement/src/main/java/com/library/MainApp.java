package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the bookService bean (Spring will inject the dependency)
        BookService bookService = (BookService) context.getBean("bookService");

        // Call method to test DI
        bookService.addBook("Clean Code");
    }
}
