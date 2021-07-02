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
    <div key={id} className="img">
      <h1 className="title">{name}</h1>
      <Tilt className="Tilt" options={{ perspective: 2200, scale: 1.05 }}>
        <Link to={newTo} className="link">
          <img src={image} alt={name} className="image"></img>
        </Link>
      </Tilt>
      <div className="description">
        <h2>{description}</h2>
      </div>
    </div>
  );
}
export default CharacterDiv;
