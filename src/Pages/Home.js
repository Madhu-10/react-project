import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Categories from './Categories';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import HomeLayout from '../Layout/HomeLayout';

function Home() {
    const [addCart, setCart] = useState(0)
    const addToCart=()=>{
        setCart(addCart+1)
    }
    const like = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Like
        </Tooltip>
    );
    const cart = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add to Cart
        </Tooltip>
    );
    const [data, setData] = useState(Categories);
    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }
    const items = [
        {
            image: <Image src="./customer1.jpg" width="50" height="50" roundedCircle />,
            name: "SHOBANA SUNDAR",
            comments: "A worm, cosy and inviting feel for the bedroom was a must too. In came the Valencia storage bed#RFstory"
        },
        {
            image: <Image src="./customer2.jpg" width="50" height="50" roundedCircle />,
            name: "SHEELA RAMESH",
            comments: "#RFstory This is our first purchase form Robust Furniture and I am so proud of this little living room nook occupied by"
        },
        {
            image: <Image src="./customer3.jpg" width="50" height="50" roundedCircle />,
            name: "KAVITHA GOVIND",
            comments: "Having beautiful furniture in your home is not about modernity or sorphistication or cult. #RFstory #HappySoul"
        },
        {
            image: <Image src="./customer4.jpg" width="50" height="50" roundedCircle />,
            name: "SHRUTI RAJ",
            comments: "#RFstory Thanks to Robust. Desperately wanted a bigger bed for my son's room. Picked Williams Bed with lovely finish."
        }
    ]

    // const [count, setCount] = useState(0)
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple|Audiowide"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>


            <div className="home" id="home">
                <img src='./bg-image.png' className="bg-image" alt="notfound" />
                <h1 className="home-text font-effect-outline"><em>Smart Solutions <br /> for Modern Living</em></h1>
                <a href='#categories'><button className="home-btn">Shop now</button></a>
            </div>
            <button className="aero"><a href='#home'><i className="bi bi-arrow-up-circle-fill text-danger"></i></a></button>
            {/* 3Grid */}
            <div className="container text-center pt-5 mt-5 mb-5">
                <div className="row">
                    <div className="col">
                        <h2>3.2<small>mn</small></h2>
                        <p>3.2 millions <br />happy customers</p>
                    </div>
                    <div className="col">
                        <h2><i className="bi bi-mortarboard-fill"></i></h2>
                        <p>4 decades <br />experience</p>
                    </div>
                    <div className="col">
                        <h2><i className="bi bi-5-circle-fill"></i></h2>
                        <p>Unmatched<br /> 5 years warrenty</p>
                    </div>
                    <div className="col">
                        <h2><i className="bi bi-0-circle-fill"></i><i className="bi bi-percent"></i></h2>
                        <p>EMIs on <br />Furniture</p>
                    </div>
                    <div className="col">
                        <h2><i className="bi bi-geo-alt-fill"></i></h2>
                        <p>Pan India <br />presence</p>
                    </div>
                    <div className="col">
                        <h2><i className="bi bi-tools"></i></h2>
                        <p>Free<br /> installation</p>
                    </div>
                </div>
            </div>

            {/* categories */}
            <h1 className='heading' id='categories'><b>Top Categories</b></h1>
            <h3 className='secondHeading'>Impressive Collection For Your Dream Home</h3>
            <Container>
                <Row className='text-center text-dark mt-5'>
                    <Col>
                        <button class="btn btn-outline-light p-0 m-0 rounded-5"><Image src="./all-icon.jpg" class="cat-btn" width="100" height="100" roundedCircle onClick={() => setData(Categories)} /></button>
                        <h6 className="pt-2">All</h6>
                    </Col>
                    <Col>
                        <button class="btn btn-outline-light p-0 m-0"><Image src="./sofa-icon.jpg" width="100" height="100" roundedCircle onClick={() => filterResult('Sofa')} /></button>
                        <h6 className="pt-2">Sofas</h6>
                    </Col>
                    <Col>
                        <button class="btn btn-outline-light p-0 m-0"><Image src="./bed-icon.jpg" width="100" height="100" roundedCircle onClick={() => filterResult('Bed')} /></button>
                        <h6 className="pt-2">Beds</h6>
                    </Col>
                    <Col>
                        <button class="btn btn-outline-light p-0 m-0"><Image src="./dinning-icon.jpg" width="100" height="100" roundedCircle onClick={() => filterResult('Dining')} /></button>
                        <h6 className="pt-2">Dining Sets</h6>
                    </Col>
                    <Col>
                        <button class="btn btn-outline-light p-0 m-0"><Image src="./chair-icon.jpg" width="100" height="100" roundedCircle onClick={() => filterResult('Chair')} /></button>
                        <h6 className="pt-2">Chairs</h6>
                    </Col>
                    <Col>
                        <button class="btn btn-outline-light p-0 m-0"><Image src="./studyTable-icon.jpg" width="100" height="100" roundedCircle onClick={() => filterResult('Study')} /></button>
                        <h6 className="pt-2">Study Tables</h6>
                    </Col>
                    <Col>
                        <button class="btn btn-outline-light p-0 m-0"><Image src="./cofeeTable-icon.jpg" width="100" height="100" roundedCircle onClick={() => filterResult('Coffee')} /></button>
                        <h6 className="pt-2">Coffee Tables</h6>
                    </Col>
                    <Col>
                        <button class="btn btn-outline-light p-0 m-0"><Image src="./wardrobe-icon.jpg" width="100" height="100" roundedCircle onClick={() => filterResult('Wardrobes')} /></button>
                        <h6 className="pt-2">Wardrobes</h6>
                    </Col>
                    <Col>
                        <button class="btn btn-outline-light p-0 m-0"><Image src="./shoeRacks-icon.jpg" width="100" height="100" roundedCircle onClick={() => filterResult('Shoeracks')} /></button>
                        <h6 className="pt-2">Shoe Racks</h6>
                    </Col>
                </Row>
            </Container>
            {/* <Container class=""> */}
            {
                data.map((values) => {
                    return <>
                        <div class="d-inline-block text-center m-4 mt-5">
                            <Card style={{ width: '18rem' }}>
                                {values.image}
                                <Card.Body>
                                    <Card.Title class="fs-5 fw-bold pb-2" style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>{values.title}</Card.Title>
                                    <Card.Text style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "13px", color: "crimson" }}>
                                        <b><i class="bi bi-currency-rupee"></i> {values.price}</b><br />
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={like}>
                                            <a href="#" class="podition-absolute px-3 h-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom"><i class="bi bi-heart-fill"></i></a>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={cart}>
                                            <a class="h-icon" style={{textAlign: "end", textDecoration: "none"}}>
                                                <i class="bi bi-cart-fill"></i>
                                            </a>
                                        </OverlayTrigger>
                                    </Card.Text>
                                    <Button variant="danger" style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}><b>Buy Now</b></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </>
                })
            }
            {/* </Container> */}

            {/* <button onClick={() => { setCount(count + 1) }}>Add to Cart</button> */}
            {/* <HomeLayout count={count} /> */}
            <h1 className='heading' id='categories'><b>Customer Stories</b></h1>
            {
                items.map((item) => {
                    return <>
                        <div class="card text-center mb-3 d-inline-flex px-5 mx-2" style={{ width: "18rem" }}>
                            <div class="card-body">
                                {item.image}
                                <h6 class="card-title">{item.name}</h6>
                                <p class="card-text text-secondary">{item.comments}</p>
                            </div>
                        </div>
                    </>
                })
            }
        </>
    )
}
export default Home