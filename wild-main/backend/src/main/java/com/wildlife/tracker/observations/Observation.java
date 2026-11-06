package com.wildlife.tracker.observations;

import java.time.LocalDate;

public record Observation(long id, long ownerId, String ownerName, long animalId, String animal, String category, String status, String image, String imagePosition,
                          long locationId, String location, String mapQuery, LocalDate date, String labelDate, String time, String time24,
                          String season, int count, String observation, boolean sensitiveLocation) {}
