import React from "react";
import Card from "./Card";
import "./Home.css";
import Modal from "./Modal";
import { useArticle } from "../../context/ArticleContext";
import { useState } from "react";

function CardGrids() {
  const [userCheck, setuserCheck] = useState(false)
const {Article,currentUser,checkUser} = useArticle()

const userCheckfunction = ()=>{
  if (currentUser === "") {
    setuserCheck(true)
  } else {
    setuserCheck(false)
  }
}

  return (
    <>
      <div className="card-grid">
      { Article.map((Data,index)=>(
         <Card
         index={index}
         Article={Article}
         key={Data.id}
         ArticleWriter={Data.writer}
         Articletitle={Data.title}
         />
      ))

      }

        <Card/>
      </div>
    </>
  );
}

export default CardGrids;
