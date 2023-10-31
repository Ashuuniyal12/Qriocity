import {React,useState,useEffect} from "react";
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/courses1.jpeg'
import img3 from '../assets/demo.png'
import "../styles/Testimonial.css";

export const Testimonial = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    if (slideIndex<=2)
      setSlideIndex(slideIndex + n);
    else
      setSlideIndex(1)
  };
  const minusSlide = (n) => {
    if (slideIndex>1)
      setSlideIndex(slideIndex +n );
    else
      setSlideIndex(3)
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(slides.length);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src={img1} style={{ width: "100%" }} />
        <div className="text">Caption Text</div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src={img2} style={{ width: "100%" }} />
        <div className="text">Caption Two</div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src={img3} style={{ width: "100%" }} />
        <div className="text">Caption Three</div>
      </div>

      <a className="prev" onClick={() => minusSlide(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};
