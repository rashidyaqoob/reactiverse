import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../base-url/BASE_URL";

export const CheckAuth = (token) => {
  // const expirationTime = new Date().getTime() + 30 * 1000;
  // const expirationToken = expirationTime - new Date().getTime()
  const expirationTime = (80 * 1000) - 60000
  if (token)  {
    console.log('token')

    localStorage.setItem('jwtToken', token);
  } 
  // else {
  //   console.log(' remove token')
  //   localStorage.removeItem('jwtToken');
    
  // }
}

export const CheckAuthExpiry = () => {
  const [status, setStatus] = useState('')
  const token = localStorage.getItem('jwtToken')
  // console.log("token",token)
console.log('line 25', status)
  const headers = { 'Authorization': token };
  // console.log("headers",headers)
    const response = fetch(`${BASE_URL}/auth`,  { headers })
            .then(response => response.json())
            .then(data => {setStatus(data.status)
    //  console.log(response)
    });
     console.log("status",response)

}