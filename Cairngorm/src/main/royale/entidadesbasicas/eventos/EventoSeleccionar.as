package entidadesbasicas.eventos
 {
	
	import entidadesbasicas.controlador.Controlador;

	public class EventoSeleccionar extends EventoCRUD
	{		
		public var selectedItem : Object;
		
		public function EventoSeleccionar(modelType:String, selectedItem : Object){		
			super(Controlador.EVENTO_SELECCIONAR, modelType);							
			this.selectedItem = selectedItem;
		}		
	}
}