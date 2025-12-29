package com.portal.controller;

import com.portal.data.LocationData;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class SomeController {

    @GetMapping("/countries")
    public List<String> getCountries() {
        return LocationData.COUNTRY_STATE_MAP.keySet().stream().toList();
    }

    @GetMapping("/states")
    public List<String> getStatesByCountry(@RequestParam String country) {
        return LocationData.COUNTRY_STATE_MAP.getOrDefault(country, List.of());
    }

    @GetMapping("/cities")
    public List<String> getCitiesByState(@RequestParam String state) {
        return LocationData.STATE_CITY_MAP.getOrDefault(state, List.of());
    }
}
