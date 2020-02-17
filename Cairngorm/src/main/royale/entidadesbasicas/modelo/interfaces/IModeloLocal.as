package entidadesbasicas.modelo.interfaces
{
	import com.adobe.cairngorm.model.IModelLocator;

	public interface IModeloLocal extends IModelLocator
	{
       	function agregarError(unMensaje:String):void;
	}
}