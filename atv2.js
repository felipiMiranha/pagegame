function mostrar(){
placar=localStorage.getItem("Pontos");
document.getElementById("update").innerHTML="<h1>pontuação: "+placar+"</h1>"
}

function voltar(){
    window.location="index.html"
}