import React from "react";
import notFoundImage from "../assets/404.png";
import { css } from "@emotion/react";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  location: string;
}

const NotFound: React.FC<Props> = ({ location }) => {
  const springs = useSpring({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    delay: 100,
    config: {
      duration: 300,
    },
  });

  return (
    <animated.div
      css={css`
        width: 100%;
        text-align: center;
        margin-top: 50px;
      `}
      style={{ ...springs }}>
      <img
        src={notFoundImage}
        alt={"location not found"}
        css={css`
          width: 70%;
        `}
      />
      <p
        css={css`
          color: #06283d;
          font-size: 22px;
          font-weight: 500;
          margin-top: 12px;
        `}>
        Oops! Invalid location : {location.toUpperCase()}
      </p>
    </animated.div>
  );
};
NotFound.displayName = "NotFound";
export default NotFound;
