package entidadesbasicas.negocios.base
{
	import mx.rpc.IResponder;
	import com.adobe.cairngorm.business.Responder;

	public interface RespuestaBase extends IResponder
	{

		function getServiceName():String;
	}
}