import './nav.scss';
import logo from '../../assets/images/logo.svg';

function Nav() {
  return (
    <nav className="nav">
      <h1>Personagens</h1>
      <h1>Vilões</h1>
      <img src={logo} alt="logo" className="logo"></img>
      <h1>Locais</h1>
      <h1>Orgnizações</h1>
    </nav>
  );
}
export default Nav;
