import Button from "../Button/Button";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <h3>Let's get to know each other</h3>
          {/* <a href="#" className="button btn__primary">
            aizaz-jamil28@outlook.com
          </a> */}

          <Button link="mailto:aizaz-jamil28@outlook.com">
            aizaz-jamil28@outlook.com
          </Button>
        </div>
        <div className="footer__wrap">
          <div className="footer__copyright">
            <p className="footer__text">
              &copy; {new Date().getFullYear()} Aizaz Jamil. All rights
              reserved.
            </p>
          </div>
          <div className="footer__socials">
            <ul className="socials__list">
              <FooterList />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
