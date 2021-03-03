import React from "react";
import PropTypes from "prop-types";
import "./OverlayIcon.css";

OverlayIcon.propTypes = {
  data: PropTypes.array,
};

export default function OverlayIcon(props) {
  const { data } = props;

  let icons = data.map((item) => (
    <OverlayIconCoponent
      key={item.id}
      overlay={item.overlay}
      bg={item.background}
      title={item.title}
    />
  ));

  return <div className="icon-wrapper">{icons}</div>;
}

OverlayIconCoponent.propTypes = {
  title: PropTypes.string,
  overlay: PropTypes.string,
  bg: PropTypes.string,
};

function OverlayIconCoponent(props) {
  const { title, overlay, bg } = props;
  let style;
  if (bg !== "") {
    style = { backgroundImage: `url(${props.bg})` };
  } else {
    style = { backgroundImage: "" };
  }

  return (
    <div className="icon" style={style}>
      <img src={overlay} alt="" />
      <span>{title}</span>
    </div>
  );
}
