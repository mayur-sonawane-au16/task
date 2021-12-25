// import {Link} from "react";
import './App.css';
import {useState, useEffect} from "react";
import {getFunction} from "./Service/ApiService";
import urls from "./config/urls";
import CookieBanner from './components/cookieBanner';
// import CookieBanner2 from './components/cookieBanner2';

function App() {

  const [getResponse, setGetResponse] = useState("")

  const getFunctionRes = (res) => {
    console.log("get response called : " , res)
    if(res){
      setGetResponse(res)
    }
  }

  useEffect(() => {
    getFunction(urls.rootUrl,"GET",getFunctionRes)
  }, [])

  

  return (
    <div className="App">
      <CookieBanner cookieData={getResponse}/>
      {/* <CookieBanner2 cookieData={getResponse}/> */}
    </div>
  );
}

export default App;
