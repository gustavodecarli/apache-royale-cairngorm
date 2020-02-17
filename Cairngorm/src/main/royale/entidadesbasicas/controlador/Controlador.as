package entidadesbasicas.controlador
{
	
	import com.adobe.cairngorm.control.FrontController;

	import entidadesbasicas.comandos.ComandoSeleccionar;


	/**
	 * The Controller (FrontController) listens to all events broadcast by a View
	 * and distributes handling of that event a command
	 * 
	 * REMEMBER: The FrontController is a manager, commands are the workers.
	 * There is only one manager but any number of workers
	 * 
	 */
	public class Controlador extends FrontController
	{
		//CRUD
		public static const EVENTO_SELECCIONAR  	: String = "EVENTO_SELECCIONAR";

		/* Constructor */
		public function Controlador(){
			addCommand(Controlador.EVENTO_SELECCIONAR 		, ComandoSeleccionar);							
					
		}
	}
}