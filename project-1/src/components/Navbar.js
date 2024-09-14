import logo from '../images/logo.png'

export default function Navbar(){
    return (
        <div className="navbar-items">
            <img className="logo" src={logo} alt="logo" />
            <h2> ReactFacts </h2>
            <h3> React Course - Project 1</h3>
        </div>
    )
} 