import './App.css';
import getApi from './api';
import { useState, useEffect } from 'react';
import Tilt from 'react-tilt';

function App() {
  const [personagens, setPersonagens] = useState();
  useEffect(() => {
    (async () => {
      const apiResponse = await getApi('Characters');
      setPersonagens(() => apiResponse);
    })();
  }, []);
  if (personagens) {
    return (
      <>
        <nav className="nav">Teste</nav>
        <div className="teste">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {personagens.map((element) => {
            console.log(element.image);
            return (
              <div key={element.id} className="img">
                <h1>{element.name}</h1>
                <Tilt
                  className="Tilt"
                  options={{ perspective: 2200, scale: 1.05 }}
                >
                  <img
                    src={element.image}
                    alt={element.name}
                    className="Image"
                  ></img>
                </Tilt>
                <div className="description">
                  <h2>{element.description}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>Erro</h1>
      </div>
    );
  }
}

export default App;
