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

const Icon: FunctionComponent<IconProps> = ({
  src,
  size,
  color,
  style,
}: IconProps) => {
  return (
    <img
      src={src}
      alt="React Logo"
      className={`icon-size__${size} icon-color__${color} ${style}`}
    />
  );
};

Icon.defaultProps = {
  size: "small",
  color: "white",
  style: "",
};

export default Icon;
