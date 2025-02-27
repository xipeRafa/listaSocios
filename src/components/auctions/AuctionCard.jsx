import { useContext, useRef} from 'react';
import { FireStoreDataContext } from '../../context/FireStoreDataContext';
  import './auctionCard.css'








export const AuctionCard = ({ item }) => {
  const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
   
  const milisegundosComoFecha = (milisegundos=0) => {
      return formateador.format(new Date(milisegundos));
  }; 



  const { deleteById, setToggle, toggle } = useContext(FireStoreDataContext);






  return (
    <div className="card shadow-sm " >

      <div className="card-body p-4 ">

        {/*<p>Creado: {  new Date(item.duration).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</p>*/}
        <p> {milisegundosComoFecha(item.idDate)}  </p>
        <hr />
        <p>Nombre: <span>{item.nombre}</span></p>

        <p>Correo: <span>{item.correo}</span></p>
        <p>Telefono: <span>{item.telefono}</span></p>
        

        <hr/> 

        
        <div className='btnBorrarInforme'> 
          <button
            className="btn btn-danger mb-2 mt-2"
            onClick={() => {
              if (window.confirm(`Quiere Borrar este Socio? ${item.nombre}`)) {
                  deleteById(item.id);
                  setToggle(!toggle);
                }
              }}
        >
          Borrar
        </button>

    

        </div>

      </div>
      
    </div>
  );
};
