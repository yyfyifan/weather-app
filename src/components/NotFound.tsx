import React from "react";
import notFoundImage from "../assets/404.png";
import { css } from "@emotion/react";

interface Props {
  location: string;
}

const NotFound: React.FC<Props> = ({ location }) => {
  return (
    <div
      css={css`
        width: 100%;
        text-align: center;
        margin-top: 50px;
      `}>
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
    </div>
  );
};
NotFound.displayName = "NotFound";
export default NotFound;
