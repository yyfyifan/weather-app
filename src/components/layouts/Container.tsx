import React from "react";
import { css } from "@emotion/react";
import { useLocationPath } from "../../hooks/useLocationPath.ts";

interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  const locationPath = useLocationPath();
  return (
    <div
      css={css`
        width: 400px;
        height: auto;
        position: relative;
        background-color: #fff;
        padding: ${locationPath ? 28 : 10}px 32px;
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
