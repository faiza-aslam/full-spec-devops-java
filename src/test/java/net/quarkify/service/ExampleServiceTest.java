package net.quarkify.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ExampleServiceTest {

    private final ExampleService exampleService = new ExampleService();

    @Test
    public void testSayHello() {
        assertEquals("hello", exampleService.sayHello());
    }

}
