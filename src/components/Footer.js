import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="footer-contact-info">
        <h1 className="footer-heading">Connect With Me</h1>
        <p className="footer-contact-access">Email: tran.yentran@gmail.com</p>
        <p className="footer-contact-access">Mobile: (626) 222-5745</p>
      </div>
      <div>
        <h1>Social Links</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/yentizzletran"><i><FaFacebook /></i></a>
          <a href="https://www.instagram.com/yentizzle/"><i><FaInstagram /></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;