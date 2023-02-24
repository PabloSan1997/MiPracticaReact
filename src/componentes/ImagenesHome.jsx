import { imagenes1, imagenes2 } from "../assets/imagenes";


function Imagenes1(){
    return(
        <>
        {imagenes1.map(elemento=>(
              <div className="area-imagen" key={elemento}>
                <img src={elemento} alt='imagen' className="foto" />
              </div>
            ))}
        </>
    );
}

function Imagenes2(){
    return(
        <>
        {imagenes2.map(elemento=>(
              <div className="area-imagen" key={elemento}>
                <img src={elemento} alt='imagen' className="foto" />
              </div>
            ))}
        </>
    );
}
export{Imagenes1, Imagenes2}