document.getElementById("container_slider").innerHTML = `
    
    <div class="slider" id="slider_manual">
            
            
    <!-- .slider_section*4>img.slider_img -->

    <div class="slider_section">

        <img src="assets/slider/productos-limpieza-1-1280x720-1-800x445.jpg" alt="Loft" class="slider_img" width="fit-content">

    </div>

    <div class="slider_section">

        <img src="assets/slider/productos-limpieza-antibacterianos-resistencia-antibioticos.jpg" alt="Cocina Brutalista" class="slider_img">

    </div>

    <div class="slider_section">

        <img src="assets/slider/productos-limpieza-toxicos-peligrosos-ocu-ksTE-U1909178767610w-758x531@La Verdad.jpg" alt="Vivienda Multifamiliar" class="slider_img">

    </div>

    </div>
    
`

const slider = document.querySelector("#slider_manual");
let sliderSection = document.querySelectorAll(".slider_section");

// .querySelectorAll porque son varios elementos con slider_section

let sliderSectionLast = sliderSection[sliderSection.length -1];

// el largo de la lista, le restamos uno, y nos devuelve la última posición, ésto lo leemos cómo un index y ya ubicamos la última sección


slider.insertAdjacentElement("afterbegin",sliderSectionLast)

//inserta el elemento sliderSectionLast, despues de empezar, es decir, en la posición [0]

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];

    slider.style.marginLeft = "-200%";

    slider.style.transition = "all 0.5s";

    setTimeout(function(){

slider.style.transition = "none";

slider.insertAdjacentElement("beforeend",sliderSectionFirst);

slider.style.marginLeft = "-100%"

    },500);

}


/* Para ponerlo automático(cada 5000 ms)*/

setInterval(function(){ 

    Next();

},5000) 