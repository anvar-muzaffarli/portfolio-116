import logoShekil from '../assets/images/logo.png'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#"><img src={logoShekil} alt="" className='logo' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">About me</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact us</a>
        </li>
 
      
      </ul>
   
    </div>
  </div>
</nav>
  )
}

export default Navbar

// ES7 2017-ci ilde JS
// es5
// var menimFaylim = require('../App.js')