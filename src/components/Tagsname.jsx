import React from "react";
import "../styles/Tagsname.scss";

const Tagsname = ({ tags }) => {
  return (
    <ul className="logement-tags-list">
      {tags.map((tag, index) => (
        <li key={index} className="logement-tags">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tagsname;
