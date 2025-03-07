import { useContext, useState } from 'react';

import { AuctionCard } from './AuctionCard';

import { FireStoreDataContext } from '../../context/FireStoreDataContext';


export const AuctionBody = () => {
  const { items, setToggle, toggle,} = useContext(FireStoreDataContext);





          const[sliceState, setSliceState]=useState(0)
          let prodByPage =8;
          const[sliceAlert, setSliceAlert]=useState('')

          const [hmState, setHmState]=useState(true)

          const [renState, setRenState]=useState(true)

          const handlerStateRen =(params)=>{
                setRenState(params) 
                setToggle(!toggle)
          }

  return (
    <div className="">

      

        <h2 className='listaH2'>Lista de Solicitudes de Inscripción</h2>


          <section>
                <button className='buttonRen' onClick={()=>handlerStateRen(false)}>Solicitudes</button>
                <button className='buttonRen' onClick={()=>handlerStateRen(true)}>Renovaciones</button>
        </section>

        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border">

          {items.sort((a, b) => a.idDate - b.idDate).filter(el=>el.ren===renState)



          .slice(sliceState, sliceState + prodByPage).map((doc, i) => {
            return <AuctionCard item={doc} key={i} />;
          })}
        </div>
    




        <div className='sliceButtons'>

            <button className={sliceState === 0 ? 'd-none' : 'button'} onClick={()=>{
                                                                  if(sliceState > 0){
                                                                      setSliceState(sliceState - prodByPage)
                                                                      window.scrollTo(0,0)
                                                                    }
                                                                  }
                                                                }>
                                                                    ⇦ Anterior
            </button>  



            <button className={sliceState === prodByPage || sliceState === 0 ? 'd-none' : 'button'} onClick={()=>{ 
                                                                                                        setSliceState(0)
                                                                                                        window.scrollTo(0,0) 
                                                                                                    }
                                                                                                  }>
                                                                                                      ０
            </button>   



            <button className='button' onClick={()=>{ 
                                    if(items.length > sliceState + prodByPage){
                                        setSliceState(sliceState + prodByPage) 
                                        window.scrollTo(0,0) 
                                    }else{
                                        setSliceAlert(' No Hay Mas Socios')
                                        setTimeout(()=>{
                                            setSliceAlert('')
                                        },2500)
                                    }
                                }
                    }>
                        Siguiente ⇨ 
            </button>  


            <span className='sliceAlert'>{sliceAlert}</span>


            <p className='sliceButtonsP'>De: {sliceState + 1} a: {items.length > sliceState + prodByPage ? sliceState + prodByPage : items.length}</p>
            <p className='sliceButtonsP'>Paginas de {prodByPage} c/u </p>

        </div>




    </div>
  );
};



