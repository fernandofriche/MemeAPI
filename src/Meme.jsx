function gerar(){
fetch('https://api.imgflip.com/get_memes').then(res=>res.json()).then(batata=>mostraMemes(batata))

fetch('https://api.quotable.io/random').then(res=>res.json()).then(batata=>mostraLegenda(batata))

function mostraLegenda(batata){
    const legenda = document.querySelector("#legenda")
    legenda.textContent = batata.content
}
function mostraMemes(batata){
   //var qtd = batata.data.memes.length
   var x = Math.floor(Math.random()*100)
   const nome = document.querySelector("#nome")
   nome.textContent = batata.data.memes[x].name
   const imagem = document.querySelector("#imagem")
   imagem.src = batata.data.memes[x].url
}
}
function Meme(){
    return(
        <>
        <button onClick={gerar}>GERAR MEME</button>
        <h1 id='nome'> </h1>
        <img src="" alt="" id='imagem'/>
        <figcaption id='legenda'></figcaption>
        
        </>
    )
}
export default Meme