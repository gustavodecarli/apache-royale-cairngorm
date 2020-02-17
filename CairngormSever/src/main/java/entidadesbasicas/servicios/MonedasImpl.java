package entidadesbasicas.servicios;

import java.util.HashSet;

import entidadesbasicas.modelo.Moneda;

public class MonedasImpl{

    public HashSet<Moneda> seleccionar(){
        HashSet<Moneda> unaLista = new HashSet<Moneda>();
        unaLista.add(new Moneda("USD","Dolares"));
        unaLista.add(new Moneda("EUR","Euros"));
        unaLista.add(new Moneda("PES","PESOS"));
         
        return unaLista;
    }
}