package entidadesbasicas.modelo{
	import entidadesbasicas.modelo.base.ModeloBase;

	import mx.collections.ArrayCollection;

	
	[Bindable]
	public class ModeloCRUD extends ModeloBase{
    	public static var RESULT_SELECCIONAR:String = "resultSeleccionar";
	 	[Bindable(event="resultSeleccionar")]
	 	
	 	public static var RESULT_OBTENER:String = "resultObtener";
	 	[Bindable(event="resultObtener")]
	 	
	 	public static var RESULT_CREAR:String = "resultCrear";
	 	[Bindable(event="resultCrear")]

	 	public static var RESULT_GUARDAR:String = "resultGuardar";
	 	[Bindable(event="resultGuardar")]
	 	
	 	public static var RESULT_CLONAR:String = "resultClonar";
	 	[Bindable(event="resultClonar")]	 	
	 	
	 	public static var RESULT_SIGUIENTECPTE:String = "resultSiguienteCpte";
	 	[Bindable(event="resultSiguienteCpte")]	 	

	 	public static var RESULT_REIMPUTAR:String = "resultReimputar";
	 	[Bindable(event="resultReimputar")]	 	

	 	public static var RESULT_ASIGNARPAGO:String = "resultAsignarPago";
	 	[Bindable(event="resultAsignarPago")]	 	

	 	public static var RESULT_HABILITAR:String = "resultHabilitar";
	 	[Bindable(event="resultHabilitar")]	 	
	 	
	 	public static var RESULT_CONSULTAR:String = "resultConsultar";
	 	[Bindable(event="resultConsultar")]	 
	 	
	 	public static var RESULT_CONSULTAR_PEDIDO:String = "resultConsultarPedido";
	 	[Bindable(event="resultConsultarPedido")]	 	 		

	 	public static var ERROR_CREAR:String = "errorCrear";
	 	[Bindable(event="errorCrear")]
	 	
	 	public static var RESULT_EMAIL:String = "resultEmail";
	 	[Bindable(event="resultEmail")]
	 	
	 	public static var RESULT_GUARDARLISTA:String = "resultGuardarLista";
	 	[Bindable(event="resultGuardarLista")]
	 	

		public var nuevo : Boolean = true;
		public var itemPadre : Object;
		public var isTree:Boolean;
		public var atributoBusqueda:String = "";
				
		public function ModeloCRUD(clazz:Class, serviceName:String, isTree:Boolean = false, segurizable = false, cacheable = false){
			this.clazz 			= clazz;
			this.serviceName 	= serviceName;		
			this.isTree 		= isTree;	
			this.segurizado		= segurizable;
			this.cacheable		= cacheable;					
		}		
		
		private function buscarReemplazar(unCollecion:ArrayCollection,unObjecto:Object,unObjectoReemplazar:Object):int{
			var index:int = -1;
			
			for (var i:int = 0 ;index == -1 && i < unCollecion.length;i++){				
				if (unObjecto.oid == unCollecion.source[i].oid){
					index = i;
					if (unObjectoReemplazar){						
						unCollecion.disableAutoUpdate();		
						var unasPropiedades:Array = mx.utils.ObjectUtil.getClassInfo(unObjectoReemplazar).properties;
						for (var p:int = 0; p < unasPropiedades.length;p++){
							try{
								if (unasPropiedades[p].localName != "hijos" && 
									unasPropiedades[p].localName != "padre")
									unCollecion.source[i][unasPropiedades[p].localName] = unObjectoReemplazar[unasPropiedades[p].localName];
							}catch(e:Error){
							}
						}			
						unCollecion.disableAutoUpdate();
						//unCollecion.source[i] = unObjectoReemplazar						
						unCollecion.refresh();
						//for (var h:int = 0; h < unCollecion.source[i].hijos;h++){
						//	unCollecion.source[i].hijos[h].padre = unObjectoReemplazar;
						//} 							
					}
						
				}										
				if (index == -1 && this.isTree && unCollecion.source[i].hijos)
					index = buscarReemplazar(unCollecion.source[i].hijos,unObjecto,unObjectoReemplazar);				
			}	
			if (index == -1 && !this.isTree)
					unCollecion.addItem(unObjectoReemplazar);
			
			return index;	
		}
		
		public function buscar(codigo:String,atributo:String,nivel:int):Object{
			this.atributoBusqueda = atributo;
			
			if (this.dataProvider.length != 0){
				if (this.isTree)
					return buscarPorCodigoJerarquico(this.dataProvider,codigo,nivel); 	
				else
					return buscarPorCodigo(codigo);
			}
			return null;
		}
		
		private function buscarPorCodigo(codigo:String):Object{
			var index:int = -1;
			
			for (var i:int = 0 ;index == -1 && i < this.dataProvider.length;i++){
				if (codigo == this.dataProvider.source[i][this.atributoBusqueda])
					return  this.dataProvider.source[i];
			}
			
			return null;
		}
		
		private function buscarPorCodigoJerarquico(unCollecion:ArrayCollection,codigo:String,nivel:int):Object{
			var index:int = -1;
			var temp:Object = null;
			
			for (var i:int = 0 ;index == -1 && i < unCollecion.length;i++){				
				if (codigo == unCollecion.source[i][this.atributoBusqueda]){
					if ((nivel == -1  && CodigoDescripcionJerarquico(unCollecion.source[i]).esHoja) || 
					    (nivel >= 0   && CodigoDescripcionJerarquico(unCollecion.source[i]).nivel == nivel) || 
					    (nivel == 999))
						return unCollecion.source[i];
					else{
						temp = buscarPorCodigoJerarquico(unCollecion.source[i].hijos,codigo,nivel);
						if (temp) 
							return temp;
					}
				}else{
					if (unCollecion.source[i].hijos){
						temp = buscarPorCodigoJerarquico(unCollecion.source[i].hijos,codigo,nivel);
						if (temp)
							return temp;
					}
				}
			}	

			return null;	
		}
		
		public function eliminarElemento(unArray:Array):void{
			if (this.isTree){
				for (var i:int = 0; i < this.dataProvider.length;i++)
					this.dataProvider[i].eliminarElementoDesde(unArray[0]);
			}					
			else{
				for (var h:int=0;h < unArray.length;h++){
					for (var j:int = this.dataProvider.length-1; j >= 0; j--){
						if (this.dataProvider.getItemAt(j).oid == unArray[h].oid)
							this.dataProvider.removeItemAt(j);						
					}
				}				
				this.dataProvider.refresh();
			}
		}
		
		public function agregarElemento(unObjecto:Object):void{
			//Esto es por el primer elemento que se carga
			if (this.dataProvider == null)
				this.dataProvider = new ArrayCollection();
			
			this.dataProvider.disableAutoUpdate();
			if (nuevo){
				if (this.itemPadre != null)
					itemPadre.agregarElemento(unObjecto);
				else{
					if (this.isTree)
						this.dataProvider.getItemAt(0).hijos.addItem(unObjecto);
					else					
						this.dataProvider.addItem(unObjecto);
				}
			}else{
				this.buscarReemplazar(this.dataProvider,this.item,unObjecto);			
								
				//this.item.copyFrom(unObjecto);
			}
			
			this.dataProvider.enableAutoUpdate();		
			this.dataProvider.refresh();
		}
		
		public function remplazarElementos(unosObjetos:ArrayCollection):void{
			if (!unosObjetos)	
				return ;
				
			//Esto es por el primer elemento que se carga
			if (this.dataProvider == null)
				this.dataProvider = new ArrayCollection();
			
			this.dataProvider.disableAutoUpdate();
			
			for (var i:int = 0; i < unosObjetos.length;i++)
				this.buscarReemplazar(this.dataProvider,unosObjetos[i],unosObjetos[i]);			
			
			this.dataProvider.enableAutoUpdate();		
			this.dataProvider.refresh();
		}
	}
}