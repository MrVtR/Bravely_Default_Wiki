import './loading.scss';
import LoadingLogo from '../../assets/images/airy.svg';

function Loading() {
  return (
    <div className="background">
      <img src={LoadingLogo} alt="Loading Logo" className="loading-image" />
      <h1 className="loading-text">Carregando</h1>
    </div>
  );
}
export default Loading;
