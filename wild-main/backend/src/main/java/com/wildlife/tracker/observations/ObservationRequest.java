package com.wildlife.tracker.observations;

import jakarta.validation.constraints.*;
import java.time.LocalDate;
import java.time.LocalTime;

public record ObservationRequest(@Positive long animalId, @Positive long locationId, @NotNull LocalDate date,
                                @NotNull LocalTime time, @Min(1) @Max(10000) int count,
                                @Size(max=2000) String observation, boolean sensitiveLocation) {}
