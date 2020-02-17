package entidadesbasicas.modelo
{
	import entidadesbasicas.modelo.base.ModeloBase;
	
	[Bindable]
	public class Modelo extends ModeloBase
	{

		public function Modelo(serviceName:String)
		{
			this.serviceName = serviceName;
		}		

	}
}