const minute = document.querySelector('#minute');
const sec = document.querySelector('#sec');
const msg = document.querySelector('#msg')
// const fullTime = document.querySelector('$')
let secT = 0;
let min = 0;

const counting = ()=>{
    secT++;
    sec.innerHTML = '0' + secT;
    if(secT > 9){
        sec.innerHTML = secT
    }
    if(secT > 59){
        min++;
        minute.innerHTML = '0' + min;

        secT = 0;
        sec.innerHTML = '0' + secT;
    }
    switch (min) {
        case 1:
          msg.innerText = `Прошла ${min} минута`;
          break;
        case 2:
          msg.innerText = `Прошла ${min} минута`;
          break;
        case 3:
          msg.innerText = `Прошла ${min} минута`;
          break;
        case 4:
          msg.innerText = `Прошла ${min} минута`;
          break;
        case 5:
          clearInterval(interval);
          msg.innerText = 'Прошло 5 минут';
          break;
        default:
          // do nothing
      }
}
// csounting()
let interval = setInterval(() =>{
    counting()
},1000)
// setInterval()