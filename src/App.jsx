import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from './assets/beach.jpg';
import slider2 from './assets/city.jpg';
import slider3 from './assets/landscape.jpg'
import Countdown from './components/Countdown';

function App() {

  const slider = [
    {
      img: slider1,
      alt: "Playa"
    },
    {
      img: slider2,
      alt: "Ciudad"
    },
    {
      img: slider3,
      alt: "Montañas"
    }
  ]

  return (
    <div className="App">
      <Carousel fade>
        {slider.map((slide, i) =>(
            <Carousel.Item key={i}>
              <img
                className="carouselImage"
                src={slide.img}
                alt={`imagen de ${slide.alt}`}
              />
            </Carousel.Item>
        ))}
        <Countdown/>
      </Carousel>
    </div>
  );
}

export default App;
