package entidadesbasicas.eventos
{
	import com.adobe.cairngorm.control.CairngormEvent;

	public class EventoCRUD extends CairngormEvent
	{
		public var modelType:String;
		
		public function EventoCRUD(eventType:String, modelType:String):void {
			super(eventType);
			this.modelType = modelType;
		}
		
		
		
	}
}