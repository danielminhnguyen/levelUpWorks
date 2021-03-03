import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Slideshow.css";

SlideShow.propTypes = {
  data: PropTypes.array,
};

function SlideShow(props) {
  const [slide, setSlide] = useState(1);
  const { data } = props;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     slide: 1,
  //     // data: slideshow,
  //     data: props.data,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  const handleClick = (id) => {
    setSlide(id);
  };

  let selectslide = data.filter((item) => item.id === slide);
  let slides = selectslide.map((item) => <Slide src={item.imagePath} key={item.id} id={item.id} />);

  let dots = data.map((item) => (
    <SlideController key={item.id} handleClick={handleClick} id={item.id} />
  ));

  return (
    <div className="slideshow">
      {slides}
      <div className="slide-controller">{dots}</div>
    </div>
  );
}

Slide.propTypes = {
  src: PropTypes.string,
};

function Slide(props) {
  return (
    <div className="slide">
      <img src={props.src} alt=""></img>
    </div>
  );
}

SlideController.propTypes = {
  handleClick: PropTypes.func,
  id: PropTypes.string,
};

function SlideController(props) {
  return <span className="slide-dot" onClick={() => props.handleClick(props.id)}></span>;
}

export default SlideShow;
