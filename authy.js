//authy.js

import {fetch} from 'wix-fetch';  

export function sendWithService(key, sender, recipient, subject, body) {
  const url = "'https://api.authy.com/protected/json/app/details";
 
  const headers = {
    "Authorization": "Bearer " + key,
    "Content-Type": "application/x-www-form-urlencoded"
  };

  const data = `from=${sender}&to=${recipient}&subject=${subject}&text=${body}`;
 
  const request = {
    "method": "post", 
    "headers": headers, 
    "body": data
  };
 
  return fetch(url, request)
   .then(response => response.json());
}





