import './footer.scss';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
function Footer(props) {
  return (
    <footer className="footer">
      <div className="author">
        <span dataHover="Feito por Vítor Ribeiro - 2021">
          Feito por Vítor Ribeiro - 2021
        </span>
      </div>
      <a
        href="https://www.linkedin.com/in/vítor-ribeiro/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
      <a
        href="https://github.com/MrVtR?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="Github" />
      </a>
    </footer>
  );
}
export default Footer;
