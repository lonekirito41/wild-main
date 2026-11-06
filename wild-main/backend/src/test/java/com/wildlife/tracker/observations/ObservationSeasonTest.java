package com.wildlife.tracker.observations;

import org.junit.jupiter.api.Test;
import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ObservationSeasonTest {
    @Test
    void assignsSpringFromMarchThroughMay() {
        assertEquals("Spring", ObservationRepository.season(LocalDate.of(2026, 3, 1)));
        assertEquals("Spring", ObservationRepository.season(LocalDate.of(2026, 5, 31)));
    }

    @Test
    void assignsSummerFromJuneThroughJuly() {
        assertEquals("Summer", ObservationRepository.season(LocalDate.of(2026, 6, 1)));
        assertEquals("Summer", ObservationRepository.season(LocalDate.of(2026, 7, 31)));
    }

    @Test
    void assignsMonsoonFromAugustThroughOctober() {
        assertEquals("Monsoon", ObservationRepository.season(LocalDate.of(2026, 8, 1)));
        assertEquals("Monsoon", ObservationRepository.season(LocalDate.of(2026, 10, 31)));
    }

    @Test
    void assignsWinterToRemainingMonths() {
        assertEquals("Winter", ObservationRepository.season(LocalDate.of(2026, 11, 1)));
        assertEquals("Winter", ObservationRepository.season(LocalDate.of(2026, 2, 28)));
    }
}
