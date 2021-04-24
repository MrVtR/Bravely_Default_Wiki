import './home.scss';
import getApi from '../../services/api';
import { useState, useEffect } from 'react';
import Tilt from 'react-tilt';
import { Nav } from '../../components/exportComponents';

function Home() {
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
        <Nav />
        <div className="teste">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {personagens.map((element) => {
            console.log(element.image);
            return (
              <div key={element.id} className="img">
                <h1 className="title">{element.name}</h1>
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
        <footer className="footer">
          <a href="https://www.linkedin.com/in/vítor-ribeiro/">
            Feito por Vítor Ribeiro
          </a>
        </footer>
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

export default Home;
