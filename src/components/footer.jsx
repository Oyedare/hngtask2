import Fb from '../assets/fa-brands_facebook-square.svg'
import Ig from '../assets/fa-brands_instagram.svg'
import Tw from '../assets/fa-brands_twitter.svg'
import Yt from '../assets/fa-brands_youtube.svg'
const Footer = () => {
  return (
    <footer>
        <div className="socials">
            <img src={Fb} alt="" />
            <img src={Ig} alt="" />
            <img src={Tw} alt="" />
            <img src={Yt} alt="" />
        </div>
        
        <div className="links">
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>

        <p className="copyright">© 2023 MovieBox by Adriana Eka Prayudha </p>
    </footer>
    
  )
}

export default Footer