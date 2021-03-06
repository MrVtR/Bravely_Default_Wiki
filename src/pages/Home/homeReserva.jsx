import './home.scss';
import getApi from '../../services/api';
import { useState, useEffect } from 'react';
import image from '../../assets/images/background3.jpg';
import jpIcon from '../../assets/icons/JP.webp';
import ukIcon from '../../assets/icons/UK.webp';
import auIcon from '../../assets/icons/AU.webp';
import naIcon from '../../assets/icons/NA.webp';
import globalIcon from '../../assets/icons/global.png';

import { Nav, Footer, Loading } from '../../components/exportComponents';

function Home() {
  const [homeData, setHomeData] = useState();
  const [figureData, setFigureData] = useState();
  const [load, setLoad] = useState(false);

  if (!load) {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'black';
    document.body.style.overflowY = 'hidden';
  }
  useEffect(() => {
    (async () => {
      const [apiResponse, apiResponseImage] = await Promise.all([
        getApi('Home'),
        getApi('FigureCaption'),
      ]);
      setHomeData(() => apiResponse);
      setFigureData(() => apiResponseImage);
      setTimeout(() => {
        setLoad(true);
      }, 6000);
    })();
  }, []);
  if (load && homeData && figureData) {
    document.body.style.backgroundImage = 'url(' + image + ')';
    document.body.style.overflowY = 'visible';
    console.log(homeData[0].description);
    return (
      <div className="slide-in">
        <Nav />
        <div className="home">
          <div className="data-container">
            <div className="game-details">
              <h2>Bravely Default: Where the Fairy Flies</h2>
              <figure className="figure-cover">
                {figureData.map((element, key) => {
                  return (
                    <>
                      <img
                        src={element.figureUrl}
                        alt="Capa do jogo"
                        className="cover-game"
                      />
                      <figcaption className="fig">
                        Box art {element.caption} do jogo
                      </figcaption>
                    </>
                  );
                })}
              </figure>
              <div className="details">
                <div className="developer">
                  <h3 className="title">Desenvolvedora:</h3>
                  <h4>Silicon Studio</h4>
                </div>
                <div className="publisher">
                  <h3 className="title">Publicadora:</h3>
                  <div>
                    <div className="flag-container">
                      <img src={jpIcon} alt="Jap??o: "></img>
                      <h4 className="flag-text">Square Enix</h4>
                    </div>
                    <div className="flag-container">
                      <img src={globalIcon} alt="Global: "></img>
                      <h4 className="flag-text">Nintendo</h4>
                    </div>
                  </div>
                </div>
                <div className="director">
                  <h3 className="title">Diretor:</h3>
                  <h4>Kensuke Nakahara</h4>
                </div>
                <div className="producer">
                  <h3 className="title">Produtor:</h3>
                  <h4>Tomoya Asano</h4>
                </div>
                <div className="designer">
                  <h3 className="title">Designer:</h3>
                  <h4>Kensuke Nakahara</h4>
                </div>
                <div className="artist">
                  <h3 className="title">Artista:</h3>
                  <h4>Akihiko Yoshida</h4>
                </div>
                <div className="writers">
                  <h3 className="title">Escritores:</h3>
                  <div>
                    <h4>Naotaka Hayashi</h4>
                    <h4>Keiichi Ajiro</h4>
                  </div>
                </div>
                <div className="composer">
                  <h3 className="title">Compositor:</h3>
                  <h4>Revo</h4>
                </div>
                <div className="plataform">
                  <h3 className="title">Plataforma:</h3>
                  <h4>Nintendo 3DS</h4>
                </div>
                <div className="release">
                  <h3 className="title">Lan??amento:</h3>
                  <div>
                    <h4 className="game-name">Bravely Default: Flying Fairy</h4>
                    <div className="flag-container">
                      <img src={jpIcon} alt="Jap??o: "></img>
                      <h4 className="flag-text">11 de Outubro de 2012</h4>
                    </div>
                    <h4 className="game-name">
                      Bravely Default: For the Sequel
                    </h4>
                    <div className="flag-container">
                      <img src={jpIcon} alt="Jap??o: "></img>
                      <h4 className="flag-text">5 de Dezembro de 2013</h4>
                    </div>
                    <div className="flag-container">
                      <img src={ukIcon} alt="Europa: "></img>
                      <h4 className="flag-text">6 de Dezembro de 2013</h4>
                    </div>
                    <div className="flag-container">
                      <img src={auIcon} alt="Austr??lia: "></img>
                      <h4 className="flag-text">7 de Dezembro de 2013</h4>
                    </div>
                    <div className="flag-container">
                      <img src={naIcon} alt="Am??rica: "></img>
                      <h4 className="flag-text">7 de Fevereiro de 2014</h4>
                    </div>
                  </div>
                </div>
                <div className="genre">
                  <h3 className="title">G??nero:</h3>
                  <h4>RPG Eletr??nico</h4>
                </div>
                <div className="game-mode">
                  <h3 className="title">Modo de jogo:</h3>
                  <h4>Um jogador</h4>
                </div>
                <div className="game-sequel">
                  <h3 className="title">Sequ??ncia direta:</h3>
                  <h4>Bravely Second: End Layer</h4>
                </div>
              </div>
            </div>

            <div className="text-container">
              <h1 className="page-title">{homeData[0].title}</h1>
              {homeData[0].description.map((element, key) => {
                return <p>{element}</p>;
              })}
              <h1 className="page-title">{homeData[1].title}</h1>
              {homeData[1].description.map((element, key) => {
                return <p>{element}</p>;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Loading />;
  }
}
export default Home;
