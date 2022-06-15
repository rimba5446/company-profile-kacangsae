import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">KacangSae</h1>
                <p className="footer-text">
                  Link. Nancang Wetan Jln Musafir Kh.12
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="product" spy={true} smooth={true} duration={1000} > Product </Link>
                  </li>
                  <li>
                  <Link to="misi-scroll" spy={true} smooth={true} duration={1000} > Visi Misi </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >kacangsae@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" >+62 821-7131-6888</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">DeveLoper</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Rimba5446" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/raykujan" > Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>
    </footer>
  );
}
export default Footer;
