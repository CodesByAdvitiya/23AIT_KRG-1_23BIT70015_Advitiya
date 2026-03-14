package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class HomeController {

    @GetMapping("/api")
    public Map<String,String> getData(){

        Map<String,String> data = new HashMap<>();

        data.put("name","Advitiya");
        data.put("course","Spring Boot");

        return data;

    }
}