

function App() {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
  <div className="container">

    {/* <a className="navbar-brand " style="background-color: white;border-radius: 0px;" href="#">
      <img src="images/mainlogo.png" width="160" className="me-2">
    </a> */}

 
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
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

    </>
  )
}

export default App
