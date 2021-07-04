import './villains.scss';
import { Nav, Footer, Loading } from '../../components/exportComponents';
import { useState, useEffect } from 'react';
import getApi from '../../services/api';
import image from '../../assets/images/background3.jpg';

function Villains() {
  const [viloes, setVilloes] = useState();
  const [load, setLoad] = useState(false);
  if (!load) {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'black';
    document.body.style.overflowY = 'hidden';
  }
  useEffect(() => {
    (async () => {
      const apiResponse = await getApi('Villains');
      setVilloes(() => apiResponse);
      setTimeout(() => {
        setLoad(true);
      }, 6000);
    })();
  }, []);
  if (load && viloes) {
    document.body.style.backgroundImage = 'url(' + image + ')';
    document.body.style.overflowY = 'visible';
    return (
      <div className="slide-in">
        <Nav />
        <Footer />
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Villains;
