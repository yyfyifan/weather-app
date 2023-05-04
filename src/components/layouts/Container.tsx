import React from "react";
import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  return (
    <div
      css={css`
        width: 400px;
        height: auto;
        position: relative;
        background-color: #fff;
        padding: 28px 32px;
        overflow: hidden;
        border-radius: 18px;
        font-family: "Roboto", sans-serif;
        transition: all 0.6s ease-out;
      `}>
      {children}
    </div>
  );
};
Container.displayName = "Container";
export default Container;
