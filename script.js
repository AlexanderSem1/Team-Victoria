fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response)=>{return response.json()})
    .then((result) =>{
        console.log(result);
    })