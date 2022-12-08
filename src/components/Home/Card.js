import React, { useState } from "react";
import Modal from "./Modal";
function Card({ Articletitle, ArticleWriter }) {
  const [Isopen, setIsopen] = useState(false);

  const title = Articletitle;
  toString(Articletitle);
  console.log(title);
  console.log(Articletitle);
  return (
    <>
      <Modal open={Isopen} onClose={() => setIsopen(false)}>
        fancymodal
      </Modal>
      <div className="cards" onClick={() => setIsopen(true)}>
        <div className="cards-title">
          <h1 className="text-limiter">{title}</h1>
        </div>

        <div className="creater">
          <img src={require("../../assets/image-avatar.png")} alt="" />
          <div className="creater-wrapper">
            <h4>{ArticleWriter}</h4>

            <div className="views">
              <div className="ratio-wrapper">
                <div className="ratio-svg"></div>
              </div>
              <p>4 views</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
