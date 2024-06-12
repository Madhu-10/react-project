import { Link } from "react-router-dom"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
function Contact() {
    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <div className='box'>
                <h1 className='heading'>Contact</h1>
                <p className='secondHeading'><a href="/" class="text-dark">Home</a> / Contact</p>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.04563363508!2d78.09087401855335!3d9.930157702538809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf6914288beb%3A0xa4589add82c551dc!2sKalavasal%2C%20Madurai%2C%20Tamil%20Nadu%20625016!5e0!3m2!1sen!2sin!4v1716044725186!5m2!1sen!2sin" width="100%" height="450" className="map" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>

            <div class="container text-center">
                <div class="row">
                    <div class="col-4 form1 rounded-5">
                        <h2 className="text-dark" style={{fontFamily: "'Sofia', sans-serif"}}>Contact Info</h2>
                        <p style={{ marginTop: "30px", marginBottom: "20px", marginLeft:"20px" }}><b><span className="text-dark">Phone: </span></b>     <span style={{ marginLeft: "20px" }}>+012 345 678 102</span></p>
                        <p style={{marginBottom: "20px", marginLeft:"20px"}}><b><span className="text-dark">Email: </span></b>      <span style={{ marginLeft: "35px" }}>mymail@gmail.com</span></p>
                        <p style={{marginBottom: "20px", marginLeft:"20px"}}><b><span className="text-dark">Address: </span></b>     <span style={{ marginLeft: "20px", textAlign: "start" }}>Address goes here,<br /><span style={{ marginLeft: "100px" }}></span>street, Crossroad 123.</span></p>
                        <p style={{marginLeft:"20px"}} className="text-dark"><b>Follow us on</b></p>
                        <p><a href="#" className="link-dark"><i class="bi bi-whatsapp fs-3 px-2"></i></a>
                        <a href="#" className="link-dark"><i class="bi bi-facebook fs-3 px-2"></i></a>
                        <a href="#" className="link-dark"><i class="bi bi-twitter fs-3 px-2"></i></a>
                        <a href="#" className="link-dark"><i class="bi bi-youtube fs-3 px-2"></i></a></p>

                    </div>
                    <div class="col-5 form2 rounded-5 text-start">
                        <h2 className="text-dark pt-3" style={{fontFamily: "'Sofia', sans-serif"}}>Get in Touch</h2>
                        <form>
                            <div class="mb-3" style={{marginLeft:"20px"}}>
                                <label class="form-label text-dark my-3"><b>First Name</b></label><br />
                                <input type="text" class="form-control" style={{width:"400px"}} />
                                <label class="form-label text-dark my-3"><b>Subject</b></label><br />
                                <input type="text" class="form-control" style={{width:"400px"}} />
                                <label class="form-label text-dark my-3"><b>Message</b></label><br />
                                <textarea style={{width:"400px", height:"150px",borderRadius:"5px"}}></textarea>
                                <button className="">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact