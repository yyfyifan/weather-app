import React from "react";
import { css } from "@emotion/react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useTitle } from "react-use";

const SearchButton: React.FC<{ onClick: React.MouseEventHandler<HTMLButtonElement> }> = ({
  onClick,
}) => {
  return (
    <button
      css={css`
        cursor: pointer;
        width: 50px;
        height: 50px;
        color: #06283d;
        background: #dff6ff;
        border-radius: 50%;
        font-size: 22px;
        transition: all 0.4s ease;

        :hover {
          color: #fff;
          background: #06283d;
        }
      `}
      onClick={onClick}>
      <FaSearch />
    </button>
  );
};

interface Props {
  onSearch: (location: string) => void;
}
const LocationSearchBox: React.FC<Props> = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  useTitle(`Weather App${location ? ` - ${location.toUpperCase()}` : ""}`);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      onSearch(location);
    }
  };

  return (
    <div
      className="search-box"
      css={css`
        width: 100%;
        height: min-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}>
      <FaMapMarkerAlt
        css={css`
          position: absolute;
          color: #06283d;
          font-size: 28px;
        `}
      />
      <input
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        autoFocus
        onKeyDown={handleKeyDown}
        css={css`
          color: #06283d;
          width: 80%;
          font-size: 24px;
          font-weight: 500;
          text-transform: capitalize;
          padding-left: 3rem;

          ::placeholder {
            font-size: 20px;
            font-weight: 500;
            color: #06283d;
            text-transform: capitalize;
          }
        `}
      />
      <SearchButton onClick={() => onSearch(location)} />
    </div>
  );
};

LocationSearchBox.displayName = "LocationSearchBox";
export default LocationSearchBox;
