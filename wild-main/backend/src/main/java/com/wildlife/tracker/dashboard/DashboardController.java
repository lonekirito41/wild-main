package com.wildlife.tracker.dashboard;

import com.wildlife.tracker.auth.Account;
import com.wildlife.tracker.observations.ObservationRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/api")
public class DashboardController {
    private final ObservationRepository observations;
    public DashboardController(ObservationRepository observations) { this.observations=observations; }
    @GetMapping("/dashboard/summary") public Map<String,Object> summary(HttpSession session) {
        long userId=account(session).id();
        Map<String,Object> result=new LinkedHashMap<>(observations.summary(userId));
        List<com.wildlife.tracker.observations.Observation> recent=observations.find(userId,null,null,null,null,null,null);
        result.put("recent",recent.stream().limit(5).toList());
        result.put("currentSeason",com.wildlife.tracker.observations.ObservationRepository.season(LocalDate.now()));
        return result;
    }
    @GetMapping("/insights") public Map<String,Object> insights(HttpSession session) {
        long userId=account(session).id();
        return Map.of("animals",observations.animalCounts(userId),"seasons",observations.seasonCounts(userId));
    }
    @GetMapping("/seasons/{season}/summary") public List<com.wildlife.tracker.observations.Observation> season(HttpSession session,@PathVariable String season) {
        if(!List.of("Spring","Summer","Monsoon","Winter").contains(season)) throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Unknown season.");
        return observations.find(account(session).id(),null,null,null,season,null,null);
    }
    private Account account(HttpSession session) { Object value=session.getAttribute("account"); if(value instanceof Account a)return a; throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,"Please sign in to view your wildlife summary."); }
}
