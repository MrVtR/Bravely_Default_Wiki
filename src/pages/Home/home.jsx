import './home.scss';
import getApi from '../../services/api';
import { useState, useEffect } from 'react';
import image from '../../assets/images/background3.jpg';
import cover from '../../assets/images/bravely-cover.jpg';
import { Nav, Footer, Loading } from '../../components/exportComponents';

function Home() {
  const [homeData, setHomeData] = useState();
  const [load, setLoad] = useState(false);
  if (!load) {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'black';
    document.body.style.overflowY = 'hidden';
  }
  useEffect(() => {
    (async () => {
      const apiResponse = await getApi('Home');
      setHomeData(() => apiResponse);
      setTimeout(() => {
        setLoad(true);
      }, 6000);
    })();
  }, []);
  if (load && homeData) {
    document.body.style.backgroundImage = 'url(' + image + ')';
    document.body.style.overflowY = 'visible';
    console.log(homeData[0].description);
    return (
      <div className="slide-in">
        <Nav />
        <div className="home">
          <div className="data-container">
            <div className="game-details">
              <h2>Bravely Default: Flying Fairy</h2>
              <figure className="figure-cover">
                <img src={cover} alt="Capa do jogo" className="cover-game" />
                <figcaption className="fig">
                  Box art europeia do jogo
                </figcaption>
              </figure>
              <div className="details">
                <div className="developer">
                  <h3 className="title">Desenvolvedora:</h3>
                  <h4>Silicon Studio</h4>
                </div>
                <div className="publisher">
                  <h3 className="title">Publicadora:</h3>
                  <div>
                    <h4>JP: Square Enix</h4>
                    <h4>WW: Nintendo</h4>
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
                  <h3 className="title">Lançamento:</h3>
                  <div>
                    <h4>October 11, 2012</h4>
                    <h4>Flying Fairy</h4>
                    <h4>JP: October 11, 2012</h4>
                    <h4>For the Sequel</h4>
                    <h4>JP: December 5, 2013</h4>
                    <h4>EU: December 6, 2013</h4>
                    <h4>AU: December 7, 2013</h4>
                    <h4>NA: February 7, 2014</h4>
                  </div>
                </div>
                <div className="genre">
                  <h3 className="title">Gênero:</h3>
                  <h4>RPG Eletrônico</h4>
                </div>
                <div className="game-mode">
                  <h3 className="title">Modo de jogo:</h3>
                  <h4>Um jogador</h4>
                </div>
                <div className="game-sequel">
                  <h3 className="title">Sequência direta:</h3>
                  <h4>Bravely Second: End Layer</h4>
                </div>
              </div>
            </div>

            <div className="text-container">
              <h1 className="page-title">{homeData[0].title}</h1>
              {homeData[0].description.map((element, key) => {
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
