import './home.scss';
import getApi from '../../services/api';
import { useState, useEffect } from 'react';

import { Nav, CharacterDiv, Footer } from '../../components/exportComponents';

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
        <div className="App">
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
      </>
    );
  } else {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  }
}
export default Home;
