
import { useEffect,useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function App() {

 const displayRef = useRef(null);

  useEffect(() => {
    const lines = ["LIVE SMARTER,", "FEEL SAFER"];
    let index = 0;
    let charIndex = 0;
    let deleting = false;

    const typingSpeed = 80;
    const deleteSpeed = 50;

    function typeLoop() {
      const current = lines[index];

      if (!deleting) {
        displayRef.current.innerHTML = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1200);
          return;
        }
      } else {
        displayRef.current.innerHTML = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % lines.length;
        }
      }

      setTimeout(typeLoop, deleting ? deleteSpeed : typingSpeed);
    }

    typeLoop();
  }, []);


   const counterRef = useRef(null);

  useEffect(() => {
    let countTo = 650;
    let current = 0;
    let speed = 10;

    const interval = setInterval(() => {
      current++;
      if (counterRef.current) {
        counterRef.current.textContent = "+" + current;
      }

      if (current >= countTo) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
  <div className="container">

    {/* <a className="navbar-brand " style="background-color: white;border-radius: 0px;" href="#">
      <img src="images/mainlogo.png" width="160" className="me-2">
    </a> */}

 
       <button
      className="navbar-toggler d-lg-none"   // 👈 SHOW ONLY MOBILE + TABLET
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#mobileMenu"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
        <li className="nav-item"><Link to={"/apple"}>About</Link></li>
        <li className="nav-item"><a className="nav-link" href="#service">Services</a></li>
        <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
      </ul>

      <div className="hotline">
        Phone-Number : <span> +91 9894842235</span>
      </div>
    </div>

  </div>
</nav>




  <div className="offcanvas offcanvas-start text-center d-lg-none" id="mobileMenu">

  <div className="offcanvas-header">
    <h4>Device Menu</h4>

      <button
      className="navbar-toggler d-lg-none"   // 👈 SHOW ONLY MOBILE + TABLET
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#mobileMenu"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>

  <div className="offcanvas-body">
    <ul className="navbar-nav">
      <li className="nav-item"><a className="nav-link text-black" href="index.html">Home</a></li>
      <li className="nav-item"><a className="nav-link text-black" href="#about">About Us</a></li>
      <li className="nav-item"><a className="nav-link text-black" href="#service">Services</a></li>
      <li className="nav-item"><a className="nav-link text-black" href="#gallery">Gallery</a></li>
      <li className="nav-item"><a className="nav-link text-black" href="#contact">Contact</a></li>
    </ul>
  </div>
</div>



<section className="hero-section">
  <div className="hero-overlay"></div>

  <div className="container hero-content">

   
    <div className="d-none d-sm-flex top-badges mb-4">
  <div className="feature-badge">
    <i className="bi bi-check-circle-fill"  style={{color:"#0055A4",fontSize:"25px"}}></i> 
    Smart Control
  </div>

  <div className="feature-badge">
    <i className="bi bi-check-circle-fill" style={{color:"#0055A4",fontSize:"25px"}}></i> 
    Customized Automation
  </div>

  <div className="feature-badge">
    <i className="bi bi-check-circle-fill" style={{color:"#0055A4",fontSize:"25px"}}></i> 
    Voice-Enabled Living
  </div>
</div>



   <h1 ref={displayRef} className="hero-title" id="typeHeading" ></h1>



  
    <div className="d-flex align-items-center hero-row mt-5">
      <button className="hero-btn">Get Started</button>

      <p className="mb-0 hero-text w-50 ps-lg-4" >
       Experience seamless home automation with intelligent systems that enhance comfort, boost security, and simplify your everyday living.
      </p>
    </div>

   
    <div className="row mt-5">

      <div className="col-lg-4 col-md-6 d-none d-sm-flex">
  <div className="feature-item d-flex gap-3">
    {/* <img src="images/energy.png" 
         style="height: 50px;width: 50px;background-color: rgb(130,128,128);border-radius: 50px;"> */}
    
    <div>
      <h5>Energy Efficiency</h5>
      <p>Smart energy management that optimizes lighting, climate, and appliance usage — reducing costs while improving comfort.</p>
    </div>
  </div>
</div>



      
    <div className="col-lg-4 col-md-6 d-none d-sm-flex">
  <div className="feature-item d-flex gap-3">
    {/* <img src="images/secure.png" 
         style="height: 50px;width: 50px;background-color: rgb(130,128,128);border-radius: 50px;"> */}
    
    <div>
      <h5>Security Integration</h5>
      <p>Advanced protection with real-time alerts, smart sensors, and automated monitoring to keep your home safe and connected.</p>
    </div>
  </div>
</div>



    
      <div className="col-lg-4 col-md-12" >
        <div className="counter-box">
          <div className="counter-number" ref={counterRef}>0</div>

          <div className="counter-label " >Compatible Devices</div>
        </div>
      </div>

    </div>

  </div>
</section>



<section className="about-section py-5" id="about" >
  <div className="container" data-aos="fade-down">

    <p className="about-label">About Us</p>
     <p className="about-label">            sync TECHNOLOGIES </p>
    <h2 className="about-title">
      EMPOWERING HOMES, <br/> REDEFINING LIVING
    </h2>

    <p className="about-subtext " style={{textAlign: "justify",hyphens: "auto"}}>
      Founded on a commitment to seamless living and uncompromising <br/>
        security, Sync Technologies is a premier provider of integrated Home <br/>
        Theatre, Home Automation, and Home Security solutions. We design, <br/> 
        install, and service bespoke systems that blend cutting-edge  <br/>
        technology with intuitive control, elevating residential environments <br/> into 
        smart, secure, and immersive living spaces.
    </p>

    <div className="row mt-5 align-items-start">

     
      <div className="col-lg-6">

        <div className="d-flex align-items-start gap-4 mb-4">
          {/* <img src="images/abtn.jpg"  class="left-img"> */}

           <ul className="checklist">
        <li><i className="bi bi-check-circle-fill"></i> One App To Control Everything</li>
        <li><i className="bi bi-check-circle-fill"></i> Future-Proof Technology, Ready To Scale</li>
        <li><i className="bi bi-check-circle-fill"></i> Design-First Approach, No Messy Wires</li>

        </ul>
        </div>

        <p className="about-desc">
          At the heart of our service is a belief: your home should adapt to you,
          not the other way around.
        </p>

        <a href="#contact" className="btn read-btn">Read More</a>

      </div>

   
      <div className="col-lg-6 position-relative">

        {/* <img src="images/hometheater.jpg" class="right-img mb-4"> */}

       
        <div className="floating-box">
          <h1 className="box-number" id="cornerCounter">0</h1>
          <h4 className="box-title">Smart Homes Delivered</h4>
          <p className="box-text">Smart living made a reality.</p>
        </div>

        {/* <p class="quote " >
          “A Smart Home Isn’t <br> About  Devices— It’s <br> About Freedom, 
          Comfort, And Peace  Of Mind.”
        </p> */}

      </div>

    </div>

  </div>
</section>


    </>
  )
}

export default App
