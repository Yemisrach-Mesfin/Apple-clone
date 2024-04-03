// import React, { useRef, useEffect } from "react";
// import "./CarouselSlides.css";
// import image1 from "../images/home/jello.jpg";
// import image2 from "../images/home/movie1.jpg";
// import image3 from "../images/home/movie2.jpg";
// import image4 from "../images/home/movie3.jpg";
// import image5 from "../images/home/messi.jpg";
// import image6 from "../images/home/football.jpg";

// function SlideShow() {
//   const slideRef = useRef(null);
//   const slideWidth = useRef(0);
//   const slideDuration = 3000;

//   useEffect(() => {
//     slideWidth.current = slideRef.current.offsetWidth;

//     const interval = setInterval(moveSlides, slideDuration);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const moveSlides = () => {
//     slideRef.current.style.transition = "margin-left 1s ease-in-out";
//     slideRef.current.style.marginLeft = `-${slideWidth.current}px`;

//     setTimeout(() => {
//       slideRef.current.style.transition = "none";
//       slideRef.current.style.marginLeft = 0;
//       slideRef.current.appendChild(slideRef.current.firstElementChild);
//     }, 1000);
//   };

//   return (
//     <section className="carousel">
//       <div className="slides" ref={slideRef}>
//         <div className="slide">
//           <img src={image1} alt="Slide 1" className="slide-image" />
//         </div>
//         <div className="slide">
//           <img src={image2} alt="Slide 2" className="slide-image" />
//         </div>
//         <div className="slide">
//           <img src={image3} alt="Slide 3" className="slide-image" />
//         </div>
//         <div className="slide">
//           <img src={image4} alt="Slide 4" className="slide-image" />
//         </div>
//         <div className="slide">
//           <img src={image5} alt="Slide 5" className="slide-image" />
//         </div>
//         <div className="slide">
//           <img src={image6} alt="Slide 6" className="slide-image" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SlideShow;
import React, { useRef, useEffect } from "react";
import "./CarouselSlides.css";
import image1 from "../images/home/jello.jpg";
import image2 from "../images/home/movie1.jpg";
import image3 from "../images/home/movie2.jpg";
import image4 from "../images/home/movie3.jpg";
import image5 from "../images/home/messi.jpg";
import image6 from "../images/home/football.jpg";

function SlideShow() {
  const slideRef = useRef(null);
  const slideWidth = useRef(0);
  const slideDuration = 3000;

  useEffect(() => {
    slideWidth.current = slideRef.current.offsetWidth;

    const interval = setInterval(moveSlides, slideDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const moveSlides = () => {
    slideRef.current.style.transition = "transform 1s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideWidth.current}px)`;

    setTimeout(() => {
      slideRef.current.style.transition = "none";
      slideRef.current.style.transform = "translateX(0)";
      slideRef.current.appendChild(slideRef.current.firstElementChild);
    }, 1000);
  };

  return (
    <section className="carousel">
      <div className="slide-overlay"></div>
      <div className="slides" ref={slideRef}>
        <div className="slide">
          <img src={image1} alt="Slide 1" className="slide-image" />
        </div>
        <div className="slide">
          <img src={image2} alt="Slide 2" className="slide-image" />
        </div>
        <div className="slide">
          <img src={image3} alt="Slide 3" className="slide-image" />
        </div>
        <div className="slide">
          <img src={image4} alt="Slide 4" className="slide-image" />
        </div>
        <div className="slide">
          <img src={image5} alt="Slide 5" className="slide-image" />
        </div>
        <div className="slide">
          <img src={image6} alt="Slide 6" className="slide-image" />
        </div>
      </div>
    </section>
  );
}

export default SlideShow;
