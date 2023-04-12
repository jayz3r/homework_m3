let block = document.querySelector('.block');

let i = 0;

const moveBlock = ()=>{
    block.style.left = i + 'px'
    i = i + 4;
    if(i > 1436){
        return true;
    }
    setTimeout(moveBlock,  100)
    // moveBlock()
}

moveBlock();