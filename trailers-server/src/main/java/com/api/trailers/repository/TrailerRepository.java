package com.api.trailers.repository;

import com.api.trailers.model.Trailer;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TrailerRepository extends MongoRepository<Trailer, ObjectId> {

    Optional<Trailer> findTrailerById(Long id);

}
