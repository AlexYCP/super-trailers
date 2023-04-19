package com.api.trailers.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "trailers")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Trailer {

    @Id
    private ObjectId objectId;
    private Long id;
    private String title;
    private String subtitle;
    private String synopysis;
    private String image;
    private String trailer;

}
