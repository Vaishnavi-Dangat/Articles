import React ,{useState} from "react";
import { useHistory } from "react-router-dom";

const ArticleLogin = () => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    

    const history=useHistory();

    const isValidUser = () =>{
           if(email == "test@yopmail.com" && password=="123456")
           {
               history.push('/ArticleList');
           }
           else{
               alert("Enter valid email or password");
           }
    }

    

    return (
        <>
           
            <div className="col-md-5 mx-auto login_div">
                   <div className="row">
                       <div className="col-12">
                          <h1 className="text-center mx-2">LOGIN</h1>
                         <form className="mt-5" autoComplete="off" onSubmit={isValidUser}>
                            <div className="form-group mt-2">
                            <h6>Email</h6>
                            <input type="text" className="form-control" value={email} onChange={(e) =>setEmail(e.target.value)}
                             placeholder="Enter your email" required/>
                           </div>
                           
                           <div className="form-group mt-4">
                            <h6>password</h6>
                            <input  type="password" className="form-control" value={password} onChange={(e) =>setPassword(e.target.value)} 
                             placeholder="Enter your password" required/>
                           </div>
                           
                            <button type="submit" className="btn btn-primary mt-4 w-100">Submit</button>
                       </form>
                       </div>
                   </div>
               </div>
        </>
        
       
      
    )
}

export default ArticleLogin
