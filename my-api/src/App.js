import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DisplayData from "./components/DisplayData";
import Loading from "./components/Loading";
 
function App() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      let data = await res.data;
     
      setData(data)
      setLoading(false);
    } catch (error) {
      console.log("error found", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  if(loading){
    return <Loading/>
  }
  return <div>
    
    {data.map((el,index)=>{
      return  <DisplayData title={el.title} body={el.body} key={index} />
       
      }
      )} 
      
  </div>
}

export default App;
