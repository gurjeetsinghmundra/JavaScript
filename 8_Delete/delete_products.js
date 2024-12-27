fetch("http://localhost:8080/products")
.then(data=>data.json())
.then(data=>{
    console.log(data);

    document.write(`<p>number: ${data["page"]["number"]}</p>`)
    document.write(`<p>totalPages: ${data["page"]["totalPages"]}</p>`)
    document.write(`<p>size: ${data["page"]["size"]}</p>`)
  
    data["_embedded"]["products"].forEach(product=>{
        //$ means value
        //``
        document.write(`<h1>${product["productName"]}</h1>`)
        document.write(`<p>${product["_links"]["self"]["href"]}</p>`) 
    });
 
})