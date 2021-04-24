import './characterDiv.scss';
import Tilt from 'react-tilt';

function CharacterDiv(props) {
  const { name, id, image, description } = props;
  return (
    <div key={id} className="img">
      <h1 className="title">{name}</h1>
      <Tilt className="Tilt" options={{ perspective: 2200, scale: 1.05 }}>
        <img src={image} alt={name} className="Image"></img>
      </Tilt>
      <div className="description">
        <h2>{description}</h2>
      </div>
    </div>
  );
}
export default CharacterDiv;
