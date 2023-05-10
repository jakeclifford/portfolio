import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './portfolio.scss';
import Stimagz from './stimagz.png';
import Family from './family.png';
import Next from './next.svg'
import Prev from './prev.svg'



export default function Portfolio(props) {

    function CustomNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: 'block'
            }}
            onClick={onClick}
          >
           <img className="arrow" src={Next}/>
          </div>
        );
      }
      
      function CustomPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: 'block'
            }}
            onClick={onClick}
          >
            <img className="arrow" src={Prev}/>
          </div>
        );
      }
      

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: false,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
  
    return (
      <section className="projects-section" id='projects'>
        <h2>Websites I've Worked on 👨‍💻</h2>
        <Slider {...settings}>
            <div className='slider-option'>
                <img className="focus-image" src={Stimagz} alt="Stimagz" />
            </div>
          <div className='slider-option'>
            <img className="project-image" src={Family} alt="Family" />
          </div>
          <div className='slider-option'>
            <img className="focus-image" src={Stimagz} alt="Stimagz" />
          </div>
          <div className='slider-option'>
            <img className="project-image" src={Family} alt="Family" />
          </div>
        </Slider>
      </section>
    );
  }

  
