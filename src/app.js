
 const promesa =  new Promise((resolve, reject) => {
       const url = fetch("http://127.0.0.1:5500/src/json.json");
       setTimeout(() => {
         resolve(url);
       }, 4000);             
})

 promesa
 .then(mostrar => console.log(mostrar))
 .finally(() => console.log("finalizo la promesa"));
 
 


