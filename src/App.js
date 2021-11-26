import GoogleLogin from 'react-google-login';
import {useState} from 'react';
import './App.css';

function App() {

const [loginData, setloginData] = useState(
  localStorage.getItem('loginData')?JSON.parse(localStorage.getItem('loginData'))
  :null
);

const handleFailure = (result)=>{
  alert(result);
};
const handleLogin = async (googleData)=>{
  const res = await fetch('/api/google-login',{
    method:'POST',
    body:JSON.stringify({
      token:googleData.tokenId,
    }),
    headers:{
      'content-Type':'application/json',
    },
  });
  const data = await res.json();
  setloginData(data);
  localStorage.setItem('loginData',JSON.stringify(data));
};

const handlelLogout = ()=>{
  localStorage.removeItem('loginData');
  setloginData(null);
};

  return (
    <div className="App">
     <h1>React Google Login Authentication</h1>

     {
       loginData ? (
         <div>
            <h3>You logged in as {loginData.email}</h3>
            <button onClick={handlelLogout}>Logout</button>
           </div>
       ):
       (
         <div><GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Log in with Google"
      onSuccess={handleLogin}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
     ></GoogleLogin></div>
       )
     }
     
    </div>
  );
}

export default App;
