// const circle = document.querySelector('.circle');
const mini = document.querySelector('.miniCirc')

let posX = 0;
let posY = 0;
let posZ = 0;
let posC = 0;
const handleMoveBox = () => {
    if (posX <= 200) {
      posX += 16;
      mini.style.left = `${posX}px`;
    } else if (posY <= 200) {
      posY += 16;
      mini.style.top = `${posY}px`;
    } else if (posZ <= 200) {
      posZ += 16;
      mini.style.left = `${200 - posZ}px`;
    } else if (posC <= 200) { 
      posC += 16;
      mini.style.top = `${200 - posC}px`;
    } 
    if(posX == 208 && posY == 208 && posZ == 208 && posC == 208){
        posX = 0;
        posZ = 0;
        posY = 0;
        posC = 0;
    }
    setTimeout(handleMoveBox, 100);
};
handleMoveBox()