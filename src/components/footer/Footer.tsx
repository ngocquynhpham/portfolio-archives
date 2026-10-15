import IconArrowLink from "../../assets/icons/IconArrowLink";
import "./Footer.scss";
const Footer = ({full = false}:{full?:boolean}) => {
  return (
    <div id="Contact" className={`bottom-contact-wrapper${full ? "--full" : ""} pt-12`}>
      <div className="text-title">
      I am looking forward to hearing from you.
      </div>
      {!full &&  <div className="spacer-huge"></div>}
     
      <div className={`layout-contact${full ? "--full" : ""}`}>
        <a
          href="https://www.linkedin.com/in/ngocquynhpham/"
          className="contact-link-block"
          target="_blank"
        >
          <div className="contact__title">LinkedIn</div>
          <div className="contact__link--icon">
            <IconArrowLink />
          </div>
        </a>
        <a
          href="https://github.com/ngocquynhpham"
          className="contact-link-block"
          target="_blank"
        >
          <div className="contact__title">Github</div>
          <div className="contact__link--icon">
            <IconArrowLink />
          </div>
        </a>
        <a
          href="https://dribbble.com/ngocquynh"
          target="_blank"
          className="contact-link-block"
        >
          <div className="contact__title">Dribbble</div>
          <div className="contact__link--icon">
            <IconArrowLink />
          </div>
        </a>
        <a
          href="https://www.behance.net/quynhphamthingoc"
          target="_blank"
          className="contact-link-block"
        >
          <div className="contact__title">Behance</div>
          <div className="contact__link--icon">
            <IconArrowLink />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
