package com.api.trailers.controller;

import com.api.trailers.model.Trailer;
import com.api.trailers.service.TrailerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/super-trailers")
public class TrailerController {

    @Autowired
    private TrailerService trailerService;

    @GetMapping
    public ResponseEntity<List<Trailer>> getAllTrailers() {
        return new ResponseEntity<>(trailerService.findAllTrailers(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Trailer>> getTrailerById(@PathVariable Long id) {
        return new ResponseEntity<>(trailerService.findTrailerById(id), HttpStatus.OK);
    }

}
