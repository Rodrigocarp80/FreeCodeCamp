function seleccionar(link{
    const opciones =document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    link.className="seleccionado";

    const x = document.getElementById("nav");
    x.className="";
}


//funcion mostrar responsive del menu

function responsiveMenu(){
    const x = document.getElementById("nav");
    if(x.className===""){
        x.className="responsive";
    }else{
        x.className="";
    }
}

window.onscroll =function(){
    efecoHabilidades()
};

function efectoHabilidades(){
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}