package com.portfolio.portfolioback.Service;

import com.portfolio.portfolioback.Entity.Idiomas;
import com.portfolio.portfolioback.Repository.RIdiomas;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SIdiomas {
    
    @Autowired
    RIdiomas rIdiomas;
    
    public List<Idiomas> list(){
        return rIdiomas.findAll();
    }
    
    public Optional<Idiomas> getOne(int id){
        return rIdiomas.findById(id);
    }
    
    public Optional<Idiomas> getByNombreI(String nombreI){
        return rIdiomas.findByNombreI(nombreI);
    }
    
    public void save(Idiomas idiomas){
       rIdiomas.save(idiomas);
    }
    
    public void delete(int id){
        rIdiomas.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rIdiomas.existsById(id);
    }
    
    public boolean existsByNombreI(String nombreI){
        return rIdiomas.existsByNombreI(nombreI);
    }
}
