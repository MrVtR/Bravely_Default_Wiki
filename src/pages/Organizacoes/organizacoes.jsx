import './organizacoes.scss';
import {
  Nav,
  Footer,
  Loading,
  OrganizationsDiv,
} from '../../components/exportComponents';
import getApi from '../../services/api';
import { useState, useEffect } from 'react';
import image from '../../assets/images/background3.jpg';

function Organizacoes() {
  const [organizacoes, setOrganizacoes] = useState();
  const [load, setLoad] = useState(false);

  if (!load) {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'black';
    document.body.style.overflowY = 'hidden';
  }
  useEffect(() => {
    (async () => {
      const apiResponse = await getApi('Organizations');
      setOrganizacoes(() => apiResponse);
      setTimeout(() => {
        setLoad(true);
      }, 6000);
    })();
  }, []);
  if (load && organizacoes) {
    document.body.style.backgroundImage = 'url(' + image + ')';
    document.body.style.overflowY = 'visible';
    return (
      <div className="slide-in">
        <Nav />
        <div className="home">
          {organizacoes.map((element, key) => {
            console.log(element.name);
            return (
              <OrganizationsDiv
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

export default Organizacoes;
