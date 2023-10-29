let url = "./data/projects.json";
let datos = [];

fetch(url)
//fetch agarra toda la información
    .then(response => response.json())
    .then(data => {  

        //data es un parametro que hace referencia a el archivo json
        console.log(data)
        datos = data.proyectos
        console.log(datos)  

        let card = ``

        for (item of datos) {
            card += `

            <div class="col col-12 col-sm-6 col-lg-4 g-4" id="${item.codigo}">

                    <div class="card g-4">

                        <img src="${item.imagen}" alt="${item.nombre}" class="card-img-top">

                        <div class="card-body">
                        
                            <h2 class="card-title h2">${item.nombre}</h2>

                            <p class="card-text p-0">${item.descripcion}</p>

                            <a href="${item.url}" class="btn btn-secondary">Ir al proyecto</a>

                        </div>

                    </div>

            </div>

    `
        }
        card += ``

        console.log(card)
        document.getElementById("proyectos").innerHTML = card;
    }
    )