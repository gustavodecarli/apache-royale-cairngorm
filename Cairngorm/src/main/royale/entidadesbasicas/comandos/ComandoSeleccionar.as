package entidadesbasicas.comandos
{
	import com.adobe.cairngorm.control.CairngormEvent;

	import entidadesbasicas.comandos.base.ComandoBase;
	import entidadesbasicas.eventos.EventoCRUD;
	import entidadesbasicas.modelo.ModeloCRUD;
	import entidadesbasicas.modelo.ModeloLocal;
	import entidadesbasicas.negocios.Delegado;
	import entidadesbasicas.negocios.RespuestaCRUD;

	import mx.collections.ArrayCollection;

	import org.apache.royale.events.Event;
	import mx.collections.ArrayList;

	/**
	 * A Command takes the event data, performs processing, 
	 * and updates the model
	 * 
	 */
	public class ComandoSeleccionar extends ComandoBase implements RespuestaCRUD
	{
		//protected var model :IModeloLocal;
		//private var modelType: String;
		//public var serviceName:String;
		private var baseTimer:int;
		private const MIN_MASK:String = "00";
        private const SEC_MASK:String = "00";
        private const MS_MASK:String = "000";

        
        public function ComandoSeleccionar(){
        	 model = ModeloLocal.getInstance();
        	 
        }

		protected function setUsuario():void{
		
		}
		
		
		public override function execute(event:CairngormEvent):void
		{
			var selectEvent:Object = event;
			modelType = selectEvent.modelType;
			
			//Si es cacheable y ya hay dato 
			//No consulta pero saca los filtros.
			if (model[modelType].cacheable && 
				model[modelType].hayDatos()){	

				model[modelType].controls = true;
				model[modelType].dispatchEvent(new Event(ModeloCRUD.RESULT_SELECCIONAR,true,true));
				
				return;
			}
			
			model[modelType].message  = "";
			model[modelType].nuevo    = false;
			model[modelType].controls = true;

			if (!model[modelType].sigCpte)
				model[modelType].item    = null
			
			this.serviceName = model[modelType].serviceName;
			
			var delegate: Delegado = new Delegado(this);
													
			delegate.seleccionar();
		}

		
		public function result(event:Object):void
		{
			var count:int = 0;
			var result:ArrayCollection = null;
			

			model[modelType].dataProvider.disableAutoUpdate();
			model[modelType].dataProvider.removeAll();
			model[modelType].dataProvider.source  = event.result.source;
			model[modelType].dataProvider.enableAutoUpdate();

			model[modelType].controls = true;
			model[modelType].dispatchEvent(new Event(ModeloCRUD.RESULT_SELECCIONAR,true,true));
		}
		
		public function fault(event:Object):void
		{			
			trace(event);
		}
	}
}
