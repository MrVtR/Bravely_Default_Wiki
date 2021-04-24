import './nav.scss';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <Link to={{ pathname: '/personagens' }} className="link">
        <span dataHover="Personagens">Personagens</span>
      </Link>
      <Link to={{ pathname: '/viloes' }} className="link">
        <span dataHover="Vilões">Vilões</span>
      </Link>
      <Link to={{ pathname: '/' }} className="link image">
        <img src={logo} alt="logo" className="logo"></img>
      </Link>
      <Link to={{ pathname: '/locais' }} className="link">
        <span dataHover="Locais">Locais</span>
      </Link>
      <Link to={{ pathname: '/organizacoes' }} className="link">
        <span dataHover="Organizações">Organizações</span>
      </Link>
    </nav>
  );
}
export default Nav;
