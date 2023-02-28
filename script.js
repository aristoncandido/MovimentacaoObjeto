
const bloco = document.querySelector('.bloco');

let inicialX; // coord inicial do objeto no eixo X
let inicialY; // coord inicial do objeto no eixo Y
let Arrastando = false; // estado do objeto se esta arrastando ou não

let atualX ; // coord atual do objeto no eixo X
let atualY; // coord atual do objeto no eixo Y

let offsetX = 0; //diferença da atual para a inicial X
let offsetY = 0; // diferença da atual para a inicial Y






bloco.addEventListener('mousedown',Movimentar);
document.addEventListener('mousemove',Andar);
document.addEventListener("mouseup",Parar);



function Movimentar(e){

    inicialX = e.clientX - offsetX ; 
    inicialY = e.clientY - offsetY;


   if(e.target == bloco){
     
    Arrastando = true;

      
   }




    


}

function Andar(e){

    if(Arrastando){
        e.preventDefault();
       
        atualX = e.clientX - inicialX;

        atualY = e.clientY - inicialY;

        offsetX = atualX;

        offsetY = atualY;

        Atualizar(atualX,atualY,bloco);










    }

}



function Parar(){

    inicialX = atualX; // atualizando os valores iniciais
    inicialY = atualY;  // atualizando as novas posiçoes atuais

    Arrastando = false;


}

function Atualizar(xPos,yPos,el){

    
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}