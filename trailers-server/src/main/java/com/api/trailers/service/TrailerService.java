package com.api.trailers.service;

import com.api.trailers.model.Trailer;
import com.api.trailers.repository.TrailerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrailerService {

    @Autowired
    private TrailerRepository trailerRepository;

    public List<Trailer> findAllTrailers() {
        return trailerRepository.findAll();
    }

    public Optional<Trailer> findTrailerById(Long id) {
        return trailerRepository.findTrailerById(id);
    }

}
