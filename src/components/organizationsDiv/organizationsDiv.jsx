import './organizationsDiv.scss';
import Tilt from 'react-tilt';

function CharacterDiv(props) {
  const { name, id, image, description } = props;
  return (
    <div key={id} className="organization-img">
      <h1 className="organization-title">{name}</h1>
      <Tilt
        className="organization-tilt"
        options={{ perspective: 2200, scale: 1.05 }}
      >
        <img src={image} alt={name} className="organization-image"></img>
      </Tilt>
      <div className="organization-description">
        <h2>{description}</h2>
      </div>
      <button>Ver mais</button>
    </div>
  );
}
export default CharacterDiv;
