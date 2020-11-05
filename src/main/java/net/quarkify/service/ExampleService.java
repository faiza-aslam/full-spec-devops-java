package net.quarkify.service;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ExampleService {

    public String sayHello() {
        return "hello";
    }
}
