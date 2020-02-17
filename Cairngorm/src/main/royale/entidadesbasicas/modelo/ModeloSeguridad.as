package entidadesbasicas.modelo
{	
	import mx.collections.ArrayCollection;
	
	
	[Bindable]
	public class ModeloSeguridad 
	{
		private static var modeloModeloSeguridad:ModeloSeguridad;
		
		public var errores:ArrayCollection = new ArrayCollection();
		
		//Constante de metodo 1..n metodos
		public static var OBTENER_USUARIOPORNOMBRE:String	= "obtenerUsuarioPorNombre";	
		public static var OBTENER_MENUGRUPO:String			= "obtenerUniversoPorGrupo";
		public static var OBTENER_AUDITORIA:String			= "obtenerAuditoria";
		

		
		
		
		
		//Variable de metodo
		public var obtenerUsuarioPorNombre:Modelo			= new Modelo("srvSeguridades");
		//public var obtenerUniversoPorGrupo:Modelo			= new Modelo("srvSeguridades");
		//public var obtenerAuditoria:Modelo					= new Modelo("srvSeguridades");




		//No Cambiar 
		public function ModeloSeguridad() 
        {
           if ( modeloModeloSeguridad != null )
                throw new Error( "Only one ModelLocator instance should be instantiated" );
        }

		public static function getModeloInstance(metodo:String):Modelo
        {       
            if ( modeloModeloSeguridad == null )
                 modeloModeloSeguridad = new ModeloSeguridad();
		                
            return modeloModeloSeguridad[metodo];
       }
       
       public static function getInstance() : ModeloSeguridad
        {
            if ( modeloModeloSeguridad == null )
                 modeloModeloSeguridad = new ModeloSeguridad();
                
            return modeloModeloSeguridad;
       }
  
	}

}