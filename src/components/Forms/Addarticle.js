import React from "react";
import "../Home/Home.css";
import { useRef } from "react";
import { useArticle } from "../../context/ArticleContext";
import { useNavigate } from "react-router";
function Addarticle() {
  const navigate = useNavigate()
  const Articleref = useRef()
  const titleref = useRef()
  const {Addarticle,currentUser,setcategory,category}=useArticle()

  function articleSubmit(e) {
    e.preventDefault()
   Addarticle({
    id: currentUser,
    title: titleref.current.value,
    article: Articleref.current.value,
    writer: currentUser,
   })


   navigate("/")

  }
  
  const selectCategory =(e)=>{
    setcategory(e.target.value)
    console.log("ok");
  }
  
  return (
    <form onSubmit={articleSubmit} className="section-form Article-form">
      <div className="form-login Add-article">
        <div className="title-login">Add an Article</div>
        <div className="form-group select-input">
                <select value={category} onChange={selectCategory} name="catogory" id="">
                  <option value="all">All</option>
                  <option value="Motivation">Motivation</option>
                  <option value="Book review">Book review</option>
                  <option value="Political">political</option>
                </select>
              </div>
        <div className="form-group-login">
          <input ref={titleref} type="text" placeholder="Title" required/>
        </div>
        <div className="form-group-login">
        <textarea ref={Articleref} cols="0" rows="10" placeholder="Type or paste your article here" required ></textarea>
          
        </div>
        <button className="Add-button" type="submit">submit</button>
        <div className="terms-conditions">
        
        </div>
      </div>
    </form>
  );
}

export default Addarticle;
