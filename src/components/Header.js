function Header() {
  return (
    <header>
      <video src="solo.mp4" loop autoPlay muted></video>
      <h1>Kacang Sangrai Sae</h1>
      <div className="row">

      <button className="btn" to="product" style={{ cursor: "pointer" }}>Product</button>

      <a href="#about" className="btn btn-custom btn-lg page-scroll" style={{ cursor: "pointer" }}>
            Whatsapp
      </a>{" "}
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
