import './footer.scss';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
function Footer(props) {
  return (
    <footer className="footer">
      Feito por Vítor Ribeiro - 2021
      <a href="https://www.linkedin.com/in/vítor-ribeiro/">
        <img src={linkedin} alt="Linkedin" />
      </a>
      <a href="https://github.com/MrVtR?tab=repositories">
        <img src={github} alt="Github" />
      </a>
    </footer>
  );
}
export default Footer;
