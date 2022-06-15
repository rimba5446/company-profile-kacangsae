import Card from "./Card";
function Product() {
  return (
    <div className="container product">
        <h2 className="main-title text-center">PRODUCT UNGGULAN</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                    <Card title="KacangSae 5Kg" img="kancang.jpeg" text="Price: 165.000 Berat Bersih : 5Kg" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="KacangSae 2Kg" img="kancang2.jpeg" text="Price: 70.000 Berat Bersih : 2Kg" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="KacangSae 200Gr" img="kancang3.jpeg" text="Price: 8.000 Berat Bersih : 200Gr" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Product;
