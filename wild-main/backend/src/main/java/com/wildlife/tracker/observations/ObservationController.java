package com.wildlife.tracker.observations;

import com.wildlife.tracker.auth.Account;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/observations")
public class ObservationController {
    private final ObservationService service;
    public ObservationController(ObservationService service) { this.service=service; }
    @GetMapping public List<Observation> list(@RequestParam(required=false) String q,@RequestParam(required=false) Long animalId,@RequestParam(required=false) Long locationId,@RequestParam(required=false) String season,@RequestParam(required=false) @DateTimeFormat(iso=DateTimeFormat.ISO.DATE) LocalDate from,@RequestParam(required=false) @DateTimeFormat(iso=DateTimeFormat.ISO.DATE) LocalDate to) {
        return service.find(0,q,animalId,locationId,season,from,to);
    }
    @GetMapping("/mine") public List<Observation> mine(HttpSession session,@RequestParam(required=false) String q,@RequestParam(required=false) Long animalId,@RequestParam(required=false) Long locationId,@RequestParam(required=false) String season,@RequestParam(required=false) @DateTimeFormat(iso=DateTimeFormat.ISO.DATE) LocalDate from,@RequestParam(required=false) @DateTimeFormat(iso=DateTimeFormat.ISO.DATE) LocalDate to) {
        return service.find(account(session).id(),q,animalId,locationId,season,from,to);
    }
    @GetMapping("/{id}") public Observation get(@PathVariable long id) { return service.get(id); }
    @PostMapping @ResponseStatus(HttpStatus.CREATED) public Observation create(HttpSession session,@Valid @RequestBody ObservationRequest request) { return service.create(account(session).id(),request); }
    @PutMapping("/{id}") public Observation update(HttpSession session,@PathVariable long id,@Valid @RequestBody ObservationRequest request) { return service.update(account(session).id(),id,request); }
    @DeleteMapping("/{id}") @ResponseStatus(HttpStatus.NO_CONTENT) public void delete(HttpSession session,@PathVariable long id) { service.delete(account(session).id(),id); }
    private Account account(HttpSession session) { Object value=session.getAttribute("account"); if(value instanceof Account a) return a; throw new org.springframework.web.server.ResponseStatusException(HttpStatus.UNAUTHORIZED,"Please sign in to manage your observations."); }
}
