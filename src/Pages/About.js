import '../App.css'
import { Link } from 'react-router-dom'
function About() {
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <div className='box'>
                <h1 className='heading'>About Us</h1>
                <p className='secondHeading'><a href='/' className='text-dark'>Home</a> / About</p>
            </div>
            <p className='py-5 fw-semibold text-start px-5'>Robust Furniture® is a fully integrated manufacturer concentrating on four key segments of the contract market—Healthcare, Education, Corporate and Government.<br /><br />Established in 1991 out of a desire to bring a unique customer-oriented approach to the contract marketplace, we design durable, elegant furniture that excels at meeting all core requirements. Combined with a huge array of options, choices, price points, and scales, our customers can specify the best possible solution.<br /><br /> We are recognized as a market leader in the quality, design, and engineering of contract furniture products, focusing on a wide range of markets and designs. Thousands of Robust product installations are in use throughout North America, supported by an industry-leading warranty and a dedication to outstanding customer service</p>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <img src='./about1.jpg' width={530}></img>
                    </div>
                    <div class="col">
                        <img src='./about2.jpg' width={530} height={350}></img>
                    </div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h3 className='heading text-danger mt-5'>Our Stories</h3>
                        <p className='aboutPara2'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div class="col">
                        <h3 className='heading text-danger mt-5'>Our Mission</h3>
                        <p className='aboutPara2'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About