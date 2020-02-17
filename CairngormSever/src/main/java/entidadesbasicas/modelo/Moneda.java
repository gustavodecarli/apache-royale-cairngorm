package entidadesbasicas.modelo;

public class Moneda{

    private String _codigo ;
    private String _descripcion;


    
    public Moneda(String codigo, String descripcion){
        this._codigo = codigo;
        this._descripcion = descripcion;
    }

    public String getCodigo() {
        return this._codigo;
    }

    public void setCodigo(String codigo) {
        this._codigo = codigo;
    }

    public String getDescripcion() {
        return this._descripcion;
    }

    public void setDescripcion(String descripcion) {
        this._descripcion = descripcion;
    }


}

