package entidadesbasicas.negocios.base
{
	import entidadesbasicas.negocios.base.RespuestaBase;

	import com.adobe.cairngorm.business.ServiceLocator;

	import mx.rpc.AbstractService;
	import mx.rpc.AsyncToken;
	import mx.rpc.IResponder;
		
	/**
	 * A Command can optionally access remote services.
	 * The Delegate provides a seamless interface between Commands
	 * and any remote services.
	 * 
	 * When the remote service responds the data is sent to the Delegate, 
	 * then forwarded back to the calling Command to be handled
	 * 
	 */
	public class DelegadoBase
	{
		private var responder:RespuestaBase;
		public var service:AbstractService;
		
		public function DelegadoBase(responder:RespuestaBase)
		{
			this.responder = responder;
			this.service   = ServiceLocator.getInstance().getService(responder.getServiceName());
		}
		
		public function ejecutar(metodo:String, item:Object=null):void {			
			var call : AsyncToken;
			if (item)
			 	call = service.getOperation(metodo).send(item);
			else				
				call = service.getOperation(metodo).send();
			

			call.addResponder(this.responder);
   
		}

	}
}