import React,{ useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";

const ArticleList=()=>{

        const[data,setData] = useState([]); 
         
        const history = useHistory();
   
        const getUser = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let fData = await response.json();
            const temp = JSON.parse(localStorage.getItem("article"));
            console.log(temp);
            fData = [...fData,...temp];
            setData(fData);
          }

        useEffect(() => {
            getUser();
        },[]);

        const getArticle = () =>{
            history.push('/Article')
        }
    
    const getArticleDetail=(ArticleId)=>
    {
        history.push(`/ArticleDetails/${ArticleId}`);
    }

    return(
        <>
            
            <div className="addButton">
                <button onClick={()=>getArticle()}>ADD ARTICLE</button> 
            </div>
            <div className="center_div">
               {data.map((entry,id)=>{
                     return(<div className="main_div" key={id}>
                      <h4>{entry.title}</h4>
                      <button className="btn5" onClick={()=>getArticleDetail(id+1)}>View Details</button>
                     </div>
                     );
                   }) 
                 }
            </div>
            </>
    );
}
export default ArticleList;
