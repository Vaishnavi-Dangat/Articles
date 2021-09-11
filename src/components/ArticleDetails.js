import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';


const ArticleDetails=()=>{
      const [ArticleData,setArticleData]=useState({});
      const {id}= useParams();

      const getUser = async () =>
      {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setArticleData(await response.json());
      }

      const getLocalData=(id)=>
      {
          const tempar =  JSON.parse(localStorage.getItem("article")); 
          const newData = tempar.filter((entry,a_id)=>{
               return a_id==(id-100)-1;
          })
          console.log(newData);
          setArticleData(newData[0]);
      }

     useEffect(() => {
         if(id<=100){
              getUser();
         }
         else{
             getLocalData(id);
         }
    },[]);

return(
   <div className="articleInfo_center">
       <div className="articleInfo_div">
        <div className="articleInfo_grid">
             
             <div>
                 <h3>{ArticleData.title}</h3>
            </div>
             <div>
               <h5>{ArticleData.body}</h5>
            </div>
            
            </div>
       </div>
    </div>
    );
}
export default ArticleDetails;
