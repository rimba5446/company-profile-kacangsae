function Card(props) {
  return (
    <div className="card">
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={"../img/"+props.img} className="text-center img-fluid" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
        <a href="https://wa.me/6281213790356?text=I'm%20interested%20in%20your%20car%20for%20sale" className="btn btn-custom btn-lg page-scroll" style={{ cursor: "pointer" }}>
            Buy Now
      </a>{" "}
      </div>
      <div className="p-3">
        <p className="card-text">
           {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;
