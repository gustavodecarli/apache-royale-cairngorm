package entidadesbasicas.eventos.base
{
	import com.adobe.cairngorm.control.CairngormEvent;

	public class Evento extends CairngormEvent
	{
		private static var _modelo	   : String = "MODELPLANIFICACIONES";
		private var _metodo	   		   : String;
		private var _parametro 		   : Object;
		
		
		public function Evento(modelo:String, metodo:String, parametro:Object=null){			
			
			super(modelo);
			
			_modelo				= modelo;
			this._metodo		= metodo;
			this._parametro		= parametro		 
		}
		
		public static function get modelo():String{
			return _modelo;
		}
		
		public static function set modelo(modelo:String):void{
			 _modelo = modelo;
		}
		
		public function get metodo():String{
			return _metodo;
		}
		
		public function get parametro():Object{
			return _parametro;
		}
	}
}