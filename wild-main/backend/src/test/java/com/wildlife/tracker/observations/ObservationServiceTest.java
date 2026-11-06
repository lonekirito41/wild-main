package com.wildlife.tracker.observations;

import com.wildlife.tracker.catalog.CatalogRepository;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

class ObservationServiceTest {
    @Test
    void filtersPersonalEncountersByTheRequestedAccount() {
        ObservationRepository observations = mock(ObservationRepository.class);
        ObservationService service = new ObservationService(observations, mock(CatalogRepository.class));
        LocalDate from = LocalDate.of(2026, 1, 1);
        LocalDate to = LocalDate.of(2026, 12, 31);

        service.find(42L, null, null, null, null, from, to);

        verify(observations).find(42L, null, null, null, null, from, to);
    }
}
