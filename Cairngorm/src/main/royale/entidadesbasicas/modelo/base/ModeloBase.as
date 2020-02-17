package entidadesbasicas.modelo.base
{

	
	import mx.collections.ArrayCollection;

	import org.apache.royale.events.EventDispatcher;
	
	[Bindable]
	public class ModeloBase extends EventDispatcher
	{
	 	public var clazz 	 				: Class
	 	public var campos					: ArrayCollection = new ArrayCollection();		
		public var item 	 				: Object 		  = null;
		public var items 	 				: ArrayCollection = new ArrayCollection();
		public var dataProvider 			: ArrayCollection = new ArrayCollection();
		public var modeloTipo				: String;
		public var controls					: Boolean = false;
		public var sigCpte					: Boolean = false; 		 		
		public var generandoReporte			: Boolean = false; 		
		public var message					: String  = "";	
		public var serviceName  			: String  = "";	
		public var filtros					: ArrayCollection = new ArrayCollection();
		public var filtroPaginado 			: Object;
		public var segurizado				: Boolean;
		public var cacheable				: Boolean;
		
		public function filtrar(unaFuncion:Function):void{
			this.dataProvider.filterFunction = unaFuncion;
			this.dataProvider.refresh();
		}	
		
		public function hayDatos():Boolean{
			return this.dataProvider && this.dataProvider.length != 0;
		}	
		
		public function vaciar():void{
			this.campos 		= null;
			this.item			= null;
			this.dataProvider	= null;
			this.filtros		= null;
			this.filtroPaginado	= null;
			
			// System.gc();
			// System.gc();
			
			this.campos 		= new ArrayCollection();
			this.item			= null;
			this.dataProvider	= new ArrayCollection();
			this.filtros		= new ArrayCollection();
			//this.filtroPaginado	= new AspectosGrilla();
		}
	}
}