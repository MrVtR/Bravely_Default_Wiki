import './characterDiv.scss';
import Tilt from 'react-tilt';
import { Link } from 'react-router-dom';

function CharacterDiv(props) {
  const { name, id, image, description } = props;
  const newTo = {
    pathname: '/detail',
    name,
    image,
    description,
  };
  return (
    <div key={id} className="character-container">
      <h1 className="character-title">{name}</h1>
      <Tilt
        className="character-tilt"
        options={{ perspective: 2200, scale: 1.05 }}
      >
        <Link to={newTo} className="character-link">
          <img src={image} alt={name} className="character-image"></img>
        </Link>
      </Tilt>
      <div className="character-description">
        <h2>{description[0]}</h2>
      </div>
    </div>
  );
}
export default CharacterDiv;
