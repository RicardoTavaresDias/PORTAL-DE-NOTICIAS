
document.getElementById("menu").addEventListener("click", acao);

function acao() {

  if (document.getElementById("menu").classList.contains("menu-fechado")){
    document.getElementById("menu").classList.remove("menu-fechado")
  } else {
    document.getElementById("menu").classList.add("menu-fechado")
  }

}