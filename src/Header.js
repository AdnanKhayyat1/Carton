import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Header.css";
import { COVER_IMAGE_URLS } from "./constants.js";
import ContentEditable from "react-contenteditable";

function Header() {
  const [title, setTitle] = useState({
    innerRef: React.createRef(),
    html: "New Page",
    tagName: "h1",
  });
  const [coverIndex, setCoverIndex] = useState(0);

  const coverImages = COVER_IMAGE_URLS.map((url) => (
    <img className="cover-image" src={url}></img>
  ));
  const onTextChange = (e) => {
    setTitle({ ...title, html: e.target.value });
  };
  const nextImage = () => {
    if (coverIndex === COVER_IMAGE_URLS.length - 1) setCoverIndex(0);
    else setCoverIndex(coverIndex + 1);
  };
  const prevImage = () => {
    if (coverIndex === 0) setCoverIndex(COVER_IMAGE_URLS.length - 1);
    else setCoverIndex(coverIndex - 1);
  };

  return (
    <div className="Header">
      {coverImages[coverIndex]}
      <ContentEditable
        className="page-title"
        onChange={onTextChange}
        {...title}
      />

      <div className="buttons-container">
        <button className="button-icon" onClick={nextImage}>
          <FaAngleLeft />
        </button>
        <button className="button-icon" onClick={prevImage}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default Header;
