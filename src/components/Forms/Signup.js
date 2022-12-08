import React from "react";
import "../Home/Home.css";
import { useRef,useState } from "react";
import { useArticle } from "../../context/ArticleContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function Signup() {

  const [userExist, setuserExist] = useState(false)
  const emailref = useRef()
  const passwordref = useRef()
  const firstNameref =useRef()
  const lastNameref = useRef()
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

  return (
    <form className="section-form" onSubmit={HandleLoginSubmit}>
      <div className="form-login">
        <div className="title-login">Please Signup..</div>
        <div className="form-group-login">
          <input ref={firstNameref} type="text" placeholder="First Name" required />
        </div>
        <div className="form-group-login">
          <input ref={lastNameref} type="text" placeholder="Last Name" required />
        </div>

        <div className="form-group-login">
          <input ref={emailref} type="email" placeholder="Email" required />
          {userExist ? <p className="Error-login">User already exist</p> : ''}
        </div>
        <div className="form-group-login">
          <input ref={passwordref} type="password" name="" id="" placeholder="Password" />
        </div>
        <button className="Add-button" type="submit">submit</button>
        <div className="terms-conditions">
            <p>Terms and conditions to apply  <Link className="Link-text" to={"/login"}>Login</Link> </p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
 