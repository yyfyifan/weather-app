import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useTitle } from "react-use";
import { useLocation, useNavigate } from "react-router-dom";

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

const LocationSearchBox = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const navigate = useNavigate();
  const urlLocation = useLocation();

  useTitle(`Weather App${searchLocation ? ` - ${searchLocation.toUpperCase()}` : ""}`);

  // Keep the input text in sync with the current location when the URL changes.
  useEffect(() => {
    setSearchLocation(decodeURI(urlLocation.pathname.substring(1)));
  }, [urlLocation]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      handleSetLocation();
    }
  };

  const handleSetLocation = () => {
    if (`/${searchLocation}` === urlLocation.pathname) {
      return;
    }
    navigate(`${searchLocation}`);
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
        value={searchLocation}
        onChange={(event) => setSearchLocation(event.target.value)}
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
      <SearchButton onClick={handleSetLocation} />
    </div>
  );
};

LocationSearchBox.displayName = "LocationSearchBox";
export default LocationSearchBox;
