package com.wildlife.tracker.catalog;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CatalogController {
    private final CatalogRepository catalog;
    public CatalogController(CatalogRepository catalog) { this.catalog = catalog; }
    @GetMapping("/animals") public List<Species> animals(@RequestParam(required=false) String q, @RequestParam(required=false) String category) { return catalog.species(clean(q),clean(category)); }
    @GetMapping("/locations") public List<WildlifeLocation> locations(@RequestParam(required=false) String q) { return catalog.locations(clean(q)); }
    private String clean(String value) { return value == null || value.isBlank() ? null : value.trim(); }
}
