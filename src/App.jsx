import './App.css';
import { useState } from 'react';

function App() {

  const [contadorEllos, setContadorEllos] = useState(0);
  const [contadorNosotros, setContadorNosotros] = useState(0);

  const reiniciar = () => {
    setContadorEllos(0);
    setContadorNosotros(0);
  };

  const handleContadorEllos = (accion) => {
    if (contadorEllos === 15 || contadorNosotros === 15)
      return null;
    else if (accion === "+" && contadorEllos < 15)
      setContadorEllos(contadorEllos + 1);
    else if (accion === "-" && contadorEllos > 0)
      setContadorEllos(contadorEllos - 1);
  };

  const handleContadorNosotros = (accion) => {
    if (contadorEllos === 15 || contadorNosotros === 15)
      return null;
    else if (accion === "+" && contadorNosotros < 15)
      setContadorNosotros(contadorNosotros + 1);
    else if (accion === "-" && contadorNosotros > 0)
      setContadorNosotros(contadorNosotros - 1);
  };

  return (

    
    <div className="App">
      <div className='reinicio-container'>
        <button className='reiniciar' onClick={() => reiniciar()}>REINICIAR</button>
      </div>
      <div className='contador'>
        <div className='contador-container'>
          <div className='nosotros-container'>
            <div className='titulo'>
              <h1>Nosotros</h1>
            </div>
            <div className='buttons'>
              <button onClick={() => handleContadorNosotros("+")}>+</button>
              <button onClick={() => handleContadorNosotros("-")}>-</button>
            </div>
            {contadorNosotros > 0 && contadorNosotros <= 15 ?
              <div className='puntos'>
                {contadorNosotros === 1 ? <img src='/Imagenes/fosforos/fosforos-1.png' alt='fosforo-1' /> : ""}
                {contadorNosotros === 2 ? <img src='/Imagenes/fosforos/fosforos-2.png' alt='fosforo-2' /> : ""}
                {contadorNosotros === 3 ? <img src='/Imagenes/fosforos/fosforos-3.png' alt='fosforo-3' /> : ""}
                {contadorNosotros === 4 ? <img src='/Imagenes/fosforos/fosforos-4.png' alt='fosforo-4' /> : ""}
                {contadorNosotros === 5 ? <img src='/Imagenes/fosforos/fosforos-5.png' alt='fosforo-5' /> : ""}
                {contadorNosotros === 6 ? <img src='/Imagenes/fosforos/fosforos-6.png' alt='fosforo-1' /> : ""}
                {contadorNosotros === 7 ? <img src='/Imagenes/fosforos/fosforos-7.png' alt='fosforo-2' /> : ""}
                {contadorNosotros === 8 ? <img src='/Imagenes/fosforos/fosforos-8.png' alt='fosforo-3' /> : ""}
                {contadorNosotros === 9 ? <img src='/Imagenes/fosforos/fosforos-9.png' alt='fosforo-4' /> : ""}
                {contadorNosotros === 10 ? <img src='/Imagenes/fosforos/fosforos-10.png' alt='fosforo-5' /> : ""}
                {contadorNosotros === 11 ? <img src='/Imagenes/fosforos/fosforos-11.png' alt='fosforo-1' /> : ""}
                {contadorNosotros === 12 ? <img src='/Imagenes/fosforos/fosforos-12.png' alt='fosforo-2' /> : ""}
                {contadorNosotros === 13 ? <img src='/Imagenes/fosforos/fosforos-13.png' alt='fosforo-3' /> : ""}
                {contadorNosotros === 14 ? <img src='/Imagenes/fosforos/fosforos-14.png' alt='fosforo-4' /> : ""}
                {contadorNosotros >= 15 ? <img src='/Imagenes/fosforos/fosforos-15.png' alt='fosforo-5' /> : ""}
                {contadorNosotros >= 15 ? <div className='pantalla-ganar'>¡Nosotros GANAMOS!</div> : ""}
              </div>
              : ""}

          </div>
          <div className='ellos-container'>
            <div className='titulo'>
              <h1>Ellos</h1>
            </div>
            <div className='buttons'>
              <button onClick={() => handleContadorEllos("+")}>+</button>
              <button onClick={() => handleContadorEllos("-")}>-</button>
            </div>
            
            {contadorEllos > 0 && contadorEllos <= 15 ?
              <div className='puntos'>
                {contadorEllos === 1 ? <img src='/Imagenes/fosforos/fosforos-1.png' alt='fosforo-1' /> : ""}
                {contadorEllos === 2 ? <img src='/Imagenes/fosforos/fosforos-2.png' alt='fosforo-2' /> : ""}
                {contadorEllos === 3 ? <img src='/Imagenes/fosforos/fosforos-3.png' alt='fosforo-3' /> : ""}
                {contadorEllos === 4 ? <img src='/Imagenes/fosforos/fosforos-4.png' alt='fosforo-4' /> : ""}
                {contadorEllos === 5 ? <img src='/Imagenes/fosforos/fosforos-5.png' alt='fosforo-5' /> : ""}
                {contadorEllos === 6 ? <img src='/Imagenes/fosforos/fosforos-6.png' alt='fosforo-1' /> : ""}
                {contadorEllos === 7 ? <img src='/Imagenes/fosforos/fosforos-7.png' alt='fosforo-2' /> : ""}
                {contadorEllos === 8 ? <img src='/Imagenes/fosforos/fosforos-8.png' alt='fosforo-3' /> : ""}
                {contadorEllos === 9 ? <img src='/Imagenes/fosforos/fosforos-9.png' alt='fosforo-4' /> : ""}
                {contadorEllos === 10 ? <img src='/Imagenes/fosforos/fosforos-10.png' alt='fosforo-5' /> : ""}
                {contadorEllos === 11 ? <img src='/Imagenes/fosforos/fosforos-11.png' alt='fosforo-1' /> : ""}
                {contadorEllos === 12 ? <img src='/Imagenes/fosforos/fosforos-12.png' alt='fosforo-2' /> : ""}
                {contadorEllos === 13 ? <img src='/Imagenes/fosforos/fosforos-13.png' alt='fosforo-3' /> : ""}
                {contadorEllos === 14 ? <img src='/Imagenes/fosforos/fosforos-14.png' alt='fosforo-4' /> : ""}
                {contadorEllos >= 15 ? <img src='/Imagenes/fosforos/fosforos-15.png' alt='fosforo-5' /> : ""}
                {contadorEllos >= 15 ? <div className='pantalla-ganar'>¡Ellos GANARON!</div> : ""}
              </div>
              : ""}

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;