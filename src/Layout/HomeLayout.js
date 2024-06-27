import { Outlet } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// function HomeLayout({count}) {
function HomeLayout({addToCart}) {
  const like = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      WishList
    </Tooltip>
  );
  const cart = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cart
    </Tooltip>
  );
  const login = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Login
    </Tooltip>
  );

  const registerUser =(e) =>{
    e.preventDefault();
    const signup = {
      username: e.target.username.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value
    }
    if(e.target.password.value === e.target.confirmPassword.value){
    fetch("http://localhost:5000/signup/insert",{
       method: 'POST',
       headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
       },
       body: JSON.stringify(signup)
    })
    .then(()=>{
      console.log("New note added");
      alert("Signup success")
    })
    .catch((err)=>{
      console.log(err);
      alert("Signup Failed")
    })
  }
  else{
    alert("Password doesn't match")
  }
  // window.location.reload(false);
  }


  const loginForm = (e) => {
    e.preventDefault()
    const user = {
        username: e.target.username.value,
        password: e.target.password.value
    }
    fetch("http://localhost:5000/signup/login",{
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then((data)=>{
        if(data.userFound) {
            alert("Login Success")
        }
        else{
            alert("Login Failed")
        }
    })
}
  return (
    <>
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="https://cdn-icons-png.flaticon.com/512/5564/5564847.png" width="50" height="50" alt="logo" class="d-inline-block align-text-top logo" style={{ paddingRight: "5px", paddingLeft: "5px" }}></img>
            <img src="./robust.png" width="150" height="40" alt="logo" class="d-inline-block align-text-top logo"></img>
          </a>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link link-dark" href="/"><b><span class="nav-text">Home</span></b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-dark" href="\#categories"><b><span class="nav-text">Categories</span></b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-dark" href="contact"><b><span class="nav-text">Contact</span></b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-dark" href="About"><b><span class="nav-text">About</span></b></a>
            </li>
          </ul>
          <nav class="navbar">
            <div class="container-fluid">
              <OverlayTrigger
                placement="bottom"
                overlay={like}>
                <a href="#" class="px-3 h-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom"><i class="bi bi-heart-fill"></i></a>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={cart}>
              <a href="#" class="h-icon">
                <i class="bi bi-cart-fill"></i>
                <span class="position-absolute top-0 start-100 translate-middle px-1 bg-danger border border-light rounded-circle fs-5"><b>{addToCart}</b>
                <span class="visually-hidden">New alerts</span>
                </span>
                </a>
                </OverlayTrigger>
                
                <OverlayTrigger
                placement="bottom"
                // delay={{ show: 250, hide: 400 }}
                overlay={login}>
                  <a href="#" class="px-3 h-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-person-circle"></i></a>
              </OverlayTrigger>
            </div>
          </nav>
        </div>
      </nav>
      {/* login form */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" style={{backgroundColor: "crimson"}}>
                <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">Login</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form method="POST" onSubmit={(e)=>{loginForm(e)}}>
                  <div class="mb-3">
                    <label  for="recipient-name" class="col-form-label fw-bold">Username</label>
                    <input type="text" name="username" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label fw-bold">Password</label>
                    <input type="password" name="password" class="form-control mb-3" id="message-text" />
                    <a href="#" data-bs-toggle="modal" data-bs-target="#signup" style={{fontSize: "13px"}}><b>Doesn't have a account</b></a>
                  </div>
              <div class="modal-footer">
                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <input type="submit" class="bg-primary bold rounded-1 text-white py-1 d-inlineblock" data-bs-dismiss="modal" value="Login" />
              </div>
              </form>
              </div>
            </div>
          </div>
        </div>
        {/* signup page */}
        <div class="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" style={{backgroundColor: "crimson"}}>
                <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">Signup</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form method='POST' onSubmit={(e)=>{registerUser(e)}}>
                  <div class="mb-1">
                    <label for="recipient-name" class="col-form-label fw-bold">Username</label>
                    <input type="text" name="username" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-1">
                    <label for="message-text" class="col-form-label fw-bold">Mail</label>
                    <input type="E-mail" name="email" class="form-control mb-1" id="message-text" />
                  </div>
                  <div class="mb-1">
                    <label for="message-text" class="col-form-label fw-bold">Phone number</label>
                    <input type="text" name="phoneNumber" class="form-control mb-1" id="message-text" />
                  </div>
                  <div class="mb-1">
                    <label for="message-text" class="col-form-label fw-bold">Create password</label>
                    <input type="password" name="password" class="form-control mb-1" id="message-text" />
                  </div>
                  <div class="mb-1">
                    <label for="message-text" class="col-form-label fw-bold">Confirm password</label>
                    <input type="password" name="confirmPassword" class="form-control mb-1" id="message-text" />
                  </div>
              <div class="modal-footer text-right d-inlineblock">
                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <input type="submit" class="bg-primary bold rounded-1 text-white py-1 d-inlineblock" data-bs-dismiss="modal" value="Signup" />
              </div>
              </form>
              </div>
            </div>
          </div>
        </div>

      <Outlet />

      {/* Footer */}
      <footer class="text-center text-lg-start mt-5" style={{ backgroundColor: "#3268a8", color: "white" }}>
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block text-dark">
            <span><b>Get connected with us on social networks:</b></span>
          </div>
          <div>
            <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i class="bi bi-facebook f-icon"></i></a>

            <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i class="bi bi-twitter f-icon"></i></a>

            <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i class="bi bi-google f-icon"></i></a>

            <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i class="bi bi-instagram f-icon"></i></a>

            <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i class="bi bi-linkedin f-icon"></i></a>

            <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i class="bi bi-github f-icon"></i></a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>
                  <img src=".\robust.png" alt="notfound" height="80" width="200"></img>
                </h6>
                <p>
                  <b>Don't think twice Choose us<br />
                    Make your Dream Home Luxury</b>
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" class="text-reset">Sofa</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Chair</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Study Tables</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Shoe Racks</a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#categories" class="text-reset">Categories</a>
                </p>
                <p>
                  <a href="/about" class="text-reset">About</a>
                </p>
                <p>
                  <a href="/contact" class="text-reset">Contact</a>
                </p>
                <p>
                  <a href="/contact" class="text-reset">Help</a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="bi bi-house me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i class="bi bi-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i class="bi bi-phone me-3"></i> + 01 234 567 88</p>
                <p><i class="bi bi-printer me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2024 Copyright:
          <a class="text-reset fw-bold" href="/">Robust.com</a>
        </div>
      </footer>
    </>
  )
}
export default HomeLayout