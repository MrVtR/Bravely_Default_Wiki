import './loading.scss';
import LoadingLogo from '../../assets/images/airy.svg';
import Tilt from 'react-tilt';

function Loading() {
  return (
    <div className="background">
      <Tilt className="Tilt" options={{ perspective: 2200, scale: 1.05 }}>
        <img src={LoadingLogo} alt="Loading Logo" className="loading-image" />
      </Tilt>
      <h1 className="loading-text">Carregando</h1>
    </div>
  );
}
export default Loading;
