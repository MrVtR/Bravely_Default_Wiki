import './home.scss';
import getApi from '../../services/api';
import { useState, useEffect } from 'react';
import image from '../../assets/images/background3.jpg';
import {
  Nav,
  CharacterDiv,
  Footer,
  Loading,
} from '../../components/exportComponents';

function Home() {
  const [personagens, setPersonagens] = useState();
  const [load, setLoad] = useState(false);
  if (!load) {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'black';
    document.body.style.overflowY = 'hidden';
  }
  useEffect(() => {
    (async () => {
      const apiResponse = await getApi('Characters');
      setPersonagens(() => apiResponse);
      setTimeout(() => {
        setLoad(true);
        document.body.style.backgroundImage = 'url(' + image + ')';
        document.body.style.overflowY = 'visible';
      }, 6000);
    })();
  }, []);
  if (load) {
    return (
      <div className="slide-in">
        <Nav />
        <div className="home">
          {personagens.map((element, key) => {
            return (
              <CharacterDiv
                name={element.name}
                id={key}
                image={element.image}
                description={element.description}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Loading />;
  }
}
export default Home;
