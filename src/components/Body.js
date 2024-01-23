import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Avatar from '../assets/Profile.png';

const Body = () => {
  return (
    <div id="body" className="body">
      <div className="body-container">
        <div className="body-profile">
          <img className="body-img" alt='avatar' src={Avatar}></img>
          <div className="body-content">
            <div className="body-headline" >Yen Tran</div>
            <div className="body-text">Full Stack Engineer</div>
          </div>
          <div className="body-icons">
            <a href="https://github.com/yenhtran" target="_blank" rel="noreferrer" className="icon-link">
              <i><FaGithub /></i>
            </a>
            <a href="https://www.linkedin.com/in/yentran1/" target="_blank" rel="noreferrer"className="icon-link" >
              <i><FaLinkedin /></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body