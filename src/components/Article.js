import React ,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';

const Article = () => {

    const[title,setTitle] = useState("");
    const[body,setBody] = useState("");
    const[articleData,setArticleData]=useState([]);

    const history = useHistory();
 
    
    
   const setArticleInfo= (e)=>{
       e.preventDefault();
       const temp ={title:title,body:body};
       const newAr=[...articleData,temp]
       setArticleData(newAr);
    
       localStorage.setItem("article",JSON.stringify(newAr));
       setTimeout(()=>{
        history.push(`/ArticleList`);  
       },1000)
      

    }

    useEffect(() => {
       const tempar = JSON.parse(localStorage.getItem("article")); 
         
          if(tempar !== null)
          {
           setArticleData(tempar);
          }
        }, [])

    
    return (
        <>
           
            <div className="col-md-5 mx-auto login_div">
                   <div className="row">
                       <div className="col-12">
                          <h1 className="text-center mx-2">ADD ARTICLE</h1>
                         <form className="mt-5" autoComplete="off">
                            <div className="form-group mt-2">
                            <h6>Title</h6>
                            <input type="text" className="form-control" value={title} onChange={(e) =>setTitle(e.target.value)}
                             placeholder="Enter your title" required/>
                           </div>
                           
                           <div className="form-group mt-4">
                            <h6>Body</h6>
                            <textarea  type="password" className="form-control" value={body} onChange={(e) =>setBody(e.target.value)} 
                             placeholder="Enter your body" required/>
                           </div>
                           
                            <button type="submit" className="btn btn-primary mt-4 w-100" onClick={setArticleInfo}>Submit</button>
                       </form>
                       </div>
                   </div>
               </div>
               
       
            
        </>
        
       
      
    )
}

export default Article;
