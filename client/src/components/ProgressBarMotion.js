import React, { useContext } from "react";

import styled from "styled-components";

import { Box } from "../box";
import { Flex } from "../flex";
import { Typography } from "../typography";
import { MotionBox } from "../motion-box";
import { IntersectionContext } from "../intersection-observer";

const Bar = styled(Box)`
  overflow: hidden;
`;
Bar.defaultProps = {
  position: "relative",
  borderRadius: 2,
};

const BarFilling = styled(MotionBox)``;
BarFilling.defaultProps = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

const BarCaption = styled(Box)``;
BarCaption.defaultProps = {
  position: "relative",
  textAlign: "right",
  // lineHeight: 0,
  fontWeight: 0,
  pr: 2,
};

const BarPercents = styled(Typography)``;
BarPercents.defaultProps = {
  color: "text500",
  fontWeight: 2,
  pl: 1,
};

export const ProgressBar = ({
  percents,
  caption,
  duration = 3,
  delay = 0.5,
  easing = "easeInOut", // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
  barWidth = 300,
  barHeight = 24,
  progressColor = "brand",
  baseColor = "bg100",
}) => {
  const { inView } = useContext(IntersectionContext);

  const percentsOffset = (percents - 100) * (barWidth / 100);

  const transition = {
    duration: duration,
    delay: delay,
    ease: easing,
  };

  const variants = {
    enter: {
      // opacity: 0,
      x: -barWidth,
    },
    animate: {
      // opacity: 1,
      x: [-barWidth, percentsOffset],
      transition,
    },
  };

  return (
    <div className="row">
      <Bar width={barWidth} height={barHeight} bg={baseColor}>
        <BarFilling variants={variants} initial="enter" />
      </Bar>
    </div>
  );
};
