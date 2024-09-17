import grid from '../images/grid.png';
import '../App.css';

export default function Hero(){
    return (
        <div className="main-content">
            <img src={grid} alt="grid-image" className="grid-image" />
            <h2> Online Experiences </h2>
            <p> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}