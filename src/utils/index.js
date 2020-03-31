import queryString from 'query-string'
const rootUrl="https://www.fastmock.site/mock/1388394dc50b2597c9f5262ad6feac28/api";
let myFetch={
    get(url,queryParams){
        url=rootUrl+url;
        if(queryParams){
            url+="?"+queryString.stringify(queryParams);
        }
        console.log(url)
        return fetch(url)
        .then(res=>res.json())

    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
              "Accept":'application/json',
              "Content-Type":'application/json'
            },
            body:JSON.stringify(body)
          })
          .then(res=>res.json())
    }

}
export {myFetch};