import com.example.ExternalApi;
import com.example.MyService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.verify;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
@ExtendWith(MockitoExtension.class)          // auto‑initialises @Mock fields
class MyServiceTest {
    @Mock
    ExternalApi externalApi;                 // 1. Create mock
    @Test
    void fetchData_returnsMockData() {
        when(externalApi.getData())          // 2. Stub method
                .thenReturn("Mock Data");
        MyService service = new MyService(externalApi);
        String result = service.fetchData(); // 3. Use mock in test
        assertEquals("Mock Data", result);   // 4. Assert
    }
    @Test
    void fetchData_callsExternalApiOnce() {
        MyService service = new MyService(externalApi);
        service.fetchData();          // call method under test
        verify(externalApi).getData(); // Did we call getData() exactly once?
    }
}
