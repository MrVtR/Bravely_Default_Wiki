import './organizationsDiv.scss';
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
    <div key={id} className="organization-img">
      <h1 className="organization-title">{name}</h1>
      <Tilt
        className="organization-tilt"
        options={{ perspective: 2200, scale: 1.05 }}
      >
        <Link to={newTo} className="link">
          <img src={image} alt={name} className="organization-image"></img>
        </Link>
      </Tilt>
      <div className="organization-description">
        <h2>{description[0]}</h2>
      </div>
    </div>
  );
}
export default CharacterDiv;
