document.getElementById("navbar").innerHTML = `

<nav class="container-fluid">
  
  <a class="navbar-brand" href="#">

    <i class="fa-solid fa-terminal"></i>

  </a>
  

  <button 
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation">


    <span class="navbar-toggler-icon"></span>


  </button>

  <div class="collapse navbar-collapse" id="navbarNav">

    <ul class="navbar-nav">

      <li class="nav-item">

        <a class="nav-link active" aria-current="page" href="#" id="link_1">Inicio</a>

      </li>

      <li class="nav-item">

        <a class="nav-link" href="education.html"id="link_2">Formación</a>

      </li>

      <li class="nav-item">

        <a class="nav-link" href="projects.html"id="link_3">Proyectos</a>

      </li>

      <li class="nav-item">

        <a class="nav-link disabled" aria-disabled="true" id="link_4">Documentación</a>

      </li>

    </ul>

  </div>

</nav>

`

function rutaArchivo(){
    var rutaAbsoluta = self.location.href;   
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}

switch (rutaArchivo()){

    case "index.html":

        link_2.href = "education.html";
        link_3.href = "projects.html";
        link_4.href = "documents.html";
        link_1.href = "#";

        link_1.className = "nav-link active";
        link_2.className = "nav-link";
        link_3.className = "nav-link";
        link_4.className = "nav-link disabled" 


        break

    case "education.html":

        link_1.href = "index.html";
        link_3.href = "projects.html";
        link_4.href = "documents.html";
        link_2.href = "#";

        link_1.className = "nav-link";
        link_2.className = "nav-link active";
        link_3.className = "nav-link";
        link_4.className = "nav-link bg-gradient"

        break

    case "projects.html":

        link_1.href = "index.html";
        link_2.href = "education.html";
        link_4.href = "documents.html";
        link_3.href = "#";

        link_1.className = "nav-link";
        link_2.className = "nav-link";
        link_3.className = "nav-link active";
        link_4.className = "nav-link bg disabled"


        break

    case "documents.html":

        link_1.href = "index.html";
        link_2.href = "education.html";
        link_3.href = "projects.html";
        link_4.href = "#";

        link_1.className = "nav-link";
        link_2.className = "nav-link";
        link_3.className = "nav-link";
        link_4.className = "nav-link bg active"


}