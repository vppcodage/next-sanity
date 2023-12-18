import CustomNextArrow from "./CustomNextArrow";
import CustomPrevArrow from "./CustomPrevArrow";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group relative esm:absolute right-0 bottom-[1.5em] flex justify-center esm:justify-end"> 
      <CustomPrevArrow className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <CustomNextArrow onClick={() => next()} />
    </div>
  );
};  

export default ButtonGroup;