package entidadesbasicas.negocios
{
	import entidadesbasicas.servicios.resultados.Pedido;
	
	import com.adobe.cairngorm.business.ServiceLocator;
	
	import mx.rpc.AbstractService;
	import mx.rpc.AsyncToken;
		
	/**
	 * A Command can optionally access remote services.
	 * The Delegate provides a seamless interface between Commands
	 * and any remote services.
	 * 
	 * When the remote service responds the data is sent to the Delegate, 
	 * then forwarded back to the calling Command to be handled
	 * 
	 */
	public class Delegado
	{
		private var responder: RespuestaCRUD;
		private var service:AbstractService;
		
		
		public function Delegado( responder: RespuestaCRUD)
		{
			this.responder = responder;
			this.service = ServiceLocator.getInstance().getService(responder.getServiceName());
		}
		

		public function seleccionar():void {
			
			var call : AsyncToken = service.seleccionar();

			call.addResponder(this.responder);
		}
	
	}
}