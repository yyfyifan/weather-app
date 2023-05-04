import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          border: 0;
          outline: none;
          box-sizing: border-box;
        }
        body {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #06283d;
        }
      `}
    />
  );
};
GlobalStyle.displayName = "GlobalStyle";
export default GlobalStyle;
