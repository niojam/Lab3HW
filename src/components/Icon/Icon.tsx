import React, { FunctionComponent } from "react";
import "./Icon.scss";

type size = "extra-small" | "small" | "medium" | "large";
type color = "white";

interface IconProps {
  src: string;
  size?: size;
  color?: color;
  style?: string;
}

const Icon: FunctionComponent<IconProps> = (props) => {
  return (
    <img
      src={props.src}
      alt="React Logo"
      className={`icon-size__${props.size} icon-color__${props.color} ${props.style}`}
    />
  );
};

Icon.defaultProps = {
  size: "small",
  color: "white",
  style: "",
};

export default Icon;
