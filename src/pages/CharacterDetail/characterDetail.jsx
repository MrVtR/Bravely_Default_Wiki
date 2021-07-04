import './characterDetail.scss';
import { Nav, Footer, Loading } from '../../components/exportComponents';
import { useState } from 'react';
import Tilt from 'react-tilt';
import imageBackground from '../../assets/images/background3.jpg';

function CharacterDetail(props) {
  window.scrollTo(0, 0);
  const { name, image, description } = props.location;
  const [load, setLoad] = useState(false);
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = 'black';
  setTimeout(() => {
    setLoad(true);
  }, 4000);
  console.log(name);
  if (load) {
    document.body.style.backgroundImage = 'url(' + imageBackground + ')';
    document.body.style.overflowY = 'visible';
    return (
      <div className="slide-in">
        <Nav />
        <div className="character-home">
          <h1 className="character-name">{name}</h1>
          <div className="character-container">
            <Tilt className="Tilt" options={{ perspective: 2200, scale: 1.05 }}>
              <img src={image} alt="character-infos" />
            </Tilt>
            <div className="character-text-container">
              {description.map((element, key) => {
                return <p className="character-text">{element}</p>;
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
export default CharacterDetail;
