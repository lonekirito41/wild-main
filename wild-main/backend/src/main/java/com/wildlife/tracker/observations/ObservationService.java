package com.wildlife.tracker.observations;

import com.wildlife.tracker.catalog.CatalogRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.time.LocalDate;
import java.util.List;

@Service
public class ObservationService {
    private final ObservationRepository observations;
    private final CatalogRepository catalog;
    public ObservationService(ObservationRepository observations,CatalogRepository catalog) { this.observations=observations; this.catalog=catalog; }
    public List<Observation> find(long userId,String q,Long animalId,Long locationId,String season,LocalDate from,LocalDate to) {
        validateSeason(season);
        if(from!=null&&to!=null&&from.isAfter(to)) throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Start date must be before end date.");
        return observations.find(userId,clean(q),animalId,locationId,clean(season),from,to);
    }
    public Observation create(long userId,ObservationRequest request) { validateReferences(request); return observations.create(userId,request); }
    public Observation update(long userId,long id,ObservationRequest request) { validateReferences(request); return observations.update(userId,id,request).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Observation not found.")); }
    public Observation get(long id) { return observations.findAny(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Observation not found.")); }
    public void delete(long userId,long id) { if(!observations.delete(userId,id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Observation not found."); }
    private void validateReferences(ObservationRequest body) {
        if(!catalog.speciesExists(body.animalId())) throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Choose an animal from the wildlife catalog.");
        if(!catalog.locationExists(body.locationId())) throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Choose a location from the location catalog.");
    }
    private void validateSeason(String season) { if(season!=null&&!season.isBlank()&&!List.of("Spring","Summer","Monsoon","Winter").contains(season)) throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Season must be Spring, Summer, Monsoon, or Winter."); }
    private String clean(String value) { return value==null||value.isBlank()?null:value.trim(); }
}
