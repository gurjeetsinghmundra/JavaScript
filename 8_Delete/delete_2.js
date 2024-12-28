fetch("http://localhost:8080/products")
.then(data=>data.json())
.then(data=>{
    console.log(data);

   data["_embedded"]["products"].forEach((product) => {
    console.log(product);

        const a = document.createElement("a");
        a.textContent=product["productName"]; //textcontent matlab usme kya likhna hai
        document.body.appendChild(a);
        console.log(product["_links"]["self"]["href"]);
        a.setAttribute("href",product["_links"]["self"]["href"]);

        a.addEventListener("click",(event)=>{

            event.preventDefault();
            fetch(product["_links"]["self"]["href"],{method:"DELETE"})
            .then(data=>data.json())
            .then(data=>console.log("deleted product"+data));
        })

   });

})