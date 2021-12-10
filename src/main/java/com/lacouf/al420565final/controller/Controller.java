package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.model.Client;
import com.lacouf.al420565final.util.ClientFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:3000")
public class Controller {

    public static final String MALE = "M";
    public static final String ONTARIO = "ON";

    public Controller() { }

    @GetMapping("/getToutClients")
    public ResponseEntity<?> getAllClients() {
        List<Client> list = ClientFactory.getClients();
        return ResponseEntity.ok(list);
    }
    @GetMapping("/getATout/clients/ontariens")
    public ResponseEntity<?> getAllClientsByProvinceOntario() {
        List<Client> list = ClientFactory.getClients();
        List<Client> list2 = list.stream()
                .filter(c-> c.getProvince() == "ON")
                .collect(Collectors.toList());
        return ResponseEntity.ok(list2);
    }
    @GetMapping("/Homme")
    public ResponseEntity<?> getAllMaleClients() {
        List<Client> list = ClientFactory.getClients();
        List<Client> listHomme = list.stream()
                .filter(c-> c.getGender() == "M")
                .collect(Collectors.toList());
        return ResponseEntity.ok(listHomme);
    }
}