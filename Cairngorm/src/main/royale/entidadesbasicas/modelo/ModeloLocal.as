package entidadesbasicas.modelo
{	
	
	import entidadesbasicas.modelo.entidades.*;
	import entidadesbasicas.modelo.interfaces.IModeloLocal;

	import mx.collections.ArrayCollection;
	import mx.collections.Sort;
	import mx.collections.SortField;	
	
	
	[Bindable]
	public class ModeloLocal implements IModeloLocal
	{
		
		
		private static var modelLocator:entidadesbasicas.modelo.ModeloLocal;
		public var errores:ArrayCollection = new ArrayCollection();
		
		public static var MONEDA_ABM:String 						= "monedaCRUD";

		//Entidades de gestion
		public var monedaCRUD:ModeloCRUD 						= new ModeloCRUD(Moneda							, "srvMonedas"		  				,false);
	
    
   		public function ModeloLocal() 
        {
           if ( modelLocator != null )
                throw new Error( "Only one ModelLocator instance should be instantiated" );
        }
        
        [Bindable]
        public static function getModelInstance(modelType:String):ModeloCRUD
        {
            
			getInstance()[modelType].modeloTipo = modelType;			                
            
			return modelLocator[modelType];
        }
       
       
        public static function getInstance() : ModeloLocal
        {
            if (modelLocator == null )
                modelLocator = new ModeloLocal();
                
            return modelLocator;
        }
	
		public function agregarError(unMensaje:String):void{
       		var orden:SortField = new SortField;
       		orden.name = "messageId";
       		orden.numeric = true;
       		orden.descending = true;
       		
       		var sort:Sort = new Sort();
       		sort.fields = [orden];
       		
       	 	
            /*
       		var unError:ModeloError = new ModeloError();
			unError.faultDetail  = unMensaje
			unError.extendedData = "../img/color/action_delete.png";
			unError.messageId	 = this.errores.length.toString();
			unError.timestamp 	 = new Date() as Number;
			
			this.errores.addItemAt(unError,0);
			this.errores.sort = sort;
            */
				
       
       }
	}
}