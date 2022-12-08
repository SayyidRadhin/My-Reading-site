import React from "react";
import "../Home/Home.css";
import { useRef,useState } from "react";
import { useArticle } from "../../context/ArticleContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function Loginform() {

  const [userExist, setuserExist] = useState(false)
  const emailref = useRef()
  const passwordref = useRef()
  const navigate = useNavigate()

  const {signup,setcurrentUser,currentUser,userData} = useArticle()

  function HandleLoginSubmit(e) {
    e.preventDefault()
    signup({
      email: emailref.current.value,
      password: passwordref.current.value
    })
    
    if (userData.find(user => user.email === emailref.current.value)) {
      setuserExist(true)
    } else {
      setuserExist(false)
      setcurrentUser("")
      setcurrentUser(emailref.current.value)
      if (currentUser !== "") {
        navigate("/")
     } else {
        
     }
    }
  }

  function navigater() {
    if (userExist) {
      navigate("/")
    }
   
  }

  return (
    <form className="section-form" onSubmit={HandleLoginSubmit}>
      <div className="form-login">
        <div className="title-login">Please Login..</div>
        <div className="form-group-login">
          <input ref={emailref} type="email" placeholder="Email" required />
          {userExist ? <p className="Error-login">User already exist</p> : ''}
        </div>
        <div className="form-group-login">
          <input ref={passwordref} type="password" name="" id="" placeholder="Password" />
        </div>
        <button className="Add-button" type="submit">submit</button>
        <div className="terms-conditions">
            <p>Not an user ? <Link className="Link-text" to={"/signup"}>Signup</Link> </p>
        </div>
      </div>
    </form>
  );
}

export default Loginform;
 