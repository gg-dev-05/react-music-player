import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function Logs(){

  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
           method : "POSt",
           URL: "http://localhost:3000/src/Api/googlelogin" ,
           data: {tokenId:response.tokenId}
    }).then(response => {
      console.log(response);
    })
  }

  const responseFailureGoogle = (response) => {
    console.log(response);
  }


  return (
    <div className="Logs">
      <div className="col-md-6 offset-md-3 text-center">
            <h1>Login With Google</h1>
            <GoogleLogin
             clientId="187081726347-v0orhuoqd364ggnraj88jiu2cof8u0rv.apps.googleusercontent.com"
             buttonText="Login With Google"
             onSuccess={responseSuccessGoogle}
             onFailure={responseFailureGoogle}
             cookiePolicy={'single_host_origin'}
             />
      </div>
    </div>
  );
}
export default Logs;