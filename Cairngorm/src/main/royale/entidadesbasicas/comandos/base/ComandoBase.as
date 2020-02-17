package entidadesbasicas.comandos.base
{
	import entidadesbasicas.modelo.interfaces.IModeloLocal;
	import entidadesbasicas.servicios.resultados.Resultado;

	import com.adobe.cairngorm.commands.ICommand;
	import com.adobe.cairngorm.control.CairngormEvent;
	
	public class ComandoBase implements ICommand
	{
		public var model:IModeloLocal;
		public var modelType: String;
		public 	  var serviceName:String;
		
		public function ComandoBase() 
		{
			model = null;
		}
		
		public function execute(event:CairngormEvent):void{
			
		}
		
		public function getServiceName():String { 
			return this.serviceName;
		}

	}
}