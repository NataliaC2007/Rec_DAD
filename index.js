//Fazer e postar aparecer
const aside = document.querySelector(".post-modal");
const botao = document.querySelector(".plus");
botao.addEventListener("click", () => {
  aside.style.display = `flex`  
})

//Fazer e postar desaparecer 
const form = document.querySelector(".form-post")
aside.addEventListener("click", (e) => {
  if (e.target == aside){
    aside.style.display = `none`
  }
})

//Clicar no logo e postar aparecer
const logo = document.querySelector(".logo");
logo.style = `cursor: pointer;`
logo.addEventListener("click", () => {
  aside.style.display = `flex`  
})


//Limitar a quantidade de caracteres 
const comentarioForm = document.querySelector(".comentario-form")
comentarioForm.setAttribute("maxlength", "200");

//Fazer o input "postar" funcionar

//Postar imagens
  function postarImagem(){
    if (this.files && this.files[0]){
      var img = new FileReader();
      img.onload = function(e) {
        document.getElementById("campo-foto").src = e.target.result;
      };
      img.readAsDataURL(this.files[0]);
    }
  }
const postar = document.querySelector(".postar");
const secaoPost = document.querySelector(".secao-posts");
const imagemInput = document.getElementById("campo-foto");
document.getElementById("campo-foto").addEventListener("change", postarImagem, false);

//Fazer a imagem aparecer antes de postar
const inputImagem = document.querySelector("#campo-foto");
inputImagem.addEventListener("change", carregarImg);
  function carregarImg(e){
 let urlImagem = e.target.files[0].name;
 const imagem = document.createElement("img");
 imagem.setAttribute("src", `${urlImagem}`);
 imagem.classList.add("imagem-form")
 const containerImagem = document.querySelector(".container-imagem");
 inputImagem.style.display = "none";
 containerImagem.appendChild(imagem);

//  postar.addEventListener("click", () => {
//   containerImagem.removeChild(imagem);
//  })
  }
  //Postar

postar.addEventListener("click", (e) => {
  e.preventDefault();
secaoPost.innerHTML += `
<article class="post">
<div class="post-info">
  <div class="usuario-info">
    <div class="avatar"></div>
    <div class="nome-hora">
      <p class="nome">Joana da Silva Peixoto</p>
      <p class="hora">00 horas atrás</p>
    </div>
    <img class="lixeira" src="lixeira.png" alt="lixeira" onclick='apagar(window.event||event)' />
  </div>
  <p class="comentario">
  ${comentarioForm.value}
  </p>
</div>
<img class="post-imagem" src="${imagemInput.src}" alt="" />
<div class="post-interacoes">
  <div class="container-like">
              <img class="like-btn" src="like.svg" alt="like" onclick='curtir(window.event||event)'/>
              <p class="descricao-like">Curtir</p>
            </div>
  <div class="container-coment">
    <img class="coment-btn" src="comentario.svg" alt="like" />
    <p class="descricao-comentario">Comentários</p>
  </div>
</div>
</article>`
aside.style.display = `none`
comentarioForm.value = ``
})

//Curtir e descurtir 
function curtir(e) {
  const btns = document.querySelectorAll('.like-btn')
  const desc_like = document.querySelectorAll('.descricao-like')
  btns.forEach((btn, i) => {
    if (btn == e.target){
      if (desc_like[i].textContent == 'Descurtir'){
        desc_like[i].textContent = 'Curtir'
        desc_like[i].style = `color: #888;`
      }else {
        desc_like[i].textContent = 'Descurtir'
        desc_like[i].style = `color: blue;`
      }
    }
  })
  var url = e.target.src.split('/')
  console.log(url)
  url = url[url.length - 1]
  if (url == 'like-solid.svg'){
    e.target.src = 'like.svg'
  }else {
    e.target.src = 'like-solid.svg'
  }

}
// Apagar postagem 
function apagar(e){
  const btns = document.querySelectorAll('.lixeira')
  const posts = document.querySelectorAll('.post')

  btns.forEach((btn, i) => {
    if (e.target == btn){
      posts[i].remove()
    }
  })
}

//Modo escuro
const header = document.querySelector("header")
const body = document.querySelector("body")
const main = document.querySelector("main")

const btnmde = document.querySelector(".btnmde")
  btnmde.addEventListener("click", () =>{
    header.style = `background-color: black;`
    body.style = `background-color: gray;`
    secaoPost.style = `background-color: gray;`
    main.style = `background-color: gray;`
    form.style = `background-color: lightgray;`
    })

//Modo claro
const btnmdc = document.querySelector(".btnmdc")
  btnmdc.addEventListener("click", () =>{
    header.style = `background-color: rgb(51, 51, 182);`
    body.style = `background-color: white;`
    secaoPost.style = `background-color: white;`
    main.style = `background-color: white;`
    form.style = `background-color: white;`
    })






  