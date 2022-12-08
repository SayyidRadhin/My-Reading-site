import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ArticleContext = createContext()

export function useArticle() {
  return useContext(ArticleContext)
}


export default function Context({children}) {
 const [Article, setArticle] = useLocalStorage("article", [])
 const [userData, setuserdata] = useLocalStorage("userData", [])
 const [currentUser, setcurrentUser] = useLocalStorage("currentuser", "")
 const [checkUser, setcheckUser] = useState(false)
 const [category, setcategory] = useState("all")
 
 console.log(category);

 function Addarticle({id,title,article,writer}) {
   setArticle((prevArticle)=>{
    
    return [...prevArticle ,{id,title,category:category,article,writer}]
   })
   
 }

 function signup({email,password,profile}) {
   setcurrentUser(email)
   console.log(currentUser);
  setuserdata(users=>{
   if (users.find(user => user.email===email)) {
     return users
   }  
   return [...users ,{email,password}]

  })
  let userChecked;
  function checkUserPresence() {
    userChecked = userData.email === userData.email
  }

}

    return(
        <ArticleContext.Provider value=
        {{userData,
        Article,
        checkUser,
        setcurrentUser,
        currentUser
        ,signup,
        Addarticle,
        setcategory,
        category
        }}>
            {children}
        </ArticleContext.Provider>

    )
}

