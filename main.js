placar=0;

function Atualizar(){
    placar=placar+1;
    document.getElementById("Pontos").innerHTML="pontuação :"+placar
}

function Salvar(){
    localStorage.setItem("Pontos", placar)
}

function Proxima(){
    window.location="atv2.html"
}