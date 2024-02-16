fetch("https://fakestoreapi.com/products")
.then(Response => Response.json())
.then(data =>{


    let card = "";

    for(let producto of data){

        card+=`
        <div class="col-6 col-md-4 col-lg-3 mt-3">
           <div class="card">
              <img src="${producto.image}" class="card-img-top" alt="...">
                <div class="card-body">
                   <h5 class="card-title titulo">${producto.title}</h5>
                   <p class="card-text parrafo">${producto.description}</p>
                    <a href="#" class="btn btn-primary mt-2">$. ${producto.price}</a>
                    <a href="#" class="btn btn-success mt-2">${producto.category}</a>
                </div>
            </div>
         </div>`
    }

    document.getElementById("contenido").innerHTML = card;



})