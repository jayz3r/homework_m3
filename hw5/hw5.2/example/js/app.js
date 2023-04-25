const tabs = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelector('.tabheader__items');
const tabsContent = document.querySelectorAll('.tabcontent');

console.log(tabs);
console.log(tabsContent);
console.log(tabsParent);

const handleHideTabsContent = () =>{
    tabsContent.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item)=>{
        item.classList.remove('tabheader__item_active')
    })
}
handleHideTabsContent()

const handleShowTabsContent = (i=2) =>{
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

handleShowTabsContent()

tabsParent.addEventListener('click',(e)=>{
    const target = e.target;
    // console.log(target);

    if(target.classList.contains('tabheader__item')){
        console.log(target);
        tabs.forEach((item,i) =>{
            if( item === target){
                // console.log(i);
                handleHideTabsContent();
                handleShowTabsContent(i);
            }
        })
    }
});

const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');
const modalOpenBtn = document.querySelector('.btn_white');

const openModal = ()=>{
    modal.classList.add('show');
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}
const closeModal = ()=>{
    modal.classList.add('hide');
    modal.classList.remove('show')
    document.body.style.overflow = '';
}
modal.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal__dialog');
    if (isOutside) {
      closeModal();
    }
  })

modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

const slide = document.querySelectorAll('.offer__slide');
const next = document.querySelector('.offer__slider-next')
const prev = document.querySelector('.offer__slider-prev')
const counter = document.querySelector('#current');
const total = document.querySelector('#total')
let count = 3
isTrue = true
interval = setInterval(()=>{
    if(isTrue){
        updateSlider()
        count++;
        if(count > 4){
            count = 1
        }
        if(count < 1){
            count = 4
        }
        counter.innerText = "0" + count;
    }
        
},2000)
next.addEventListener('click',()=>{
    count++
    if(count > 4){
        count = 1
    }
    counter.innerText = "0" + count
    updateSlider()
    isTrue = false;
    setTimeout(()=>(isTrue = true), 5000)
})

prev.addEventListener('click',()=>{
    count--
    if(count < 1){
        count = 4
    }
    counter.innerText = "0" + count
    updateSlider()
    isTrue = false;
    setTimeout(()=>(isTrue = true), 5000)
})

function updateSlider() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
        slide[count - 1].classList.add('active');
    }
}

document.onscroll = () =>{
    window.innerHeight + window.scrollY >= document.body.offsetHeight -0.8 ? openModal() : '';
};

const forms = document.querySelectorAll('form');
const ok = document.querySelector('.okAlert');
const error = document.querySelector('.errorAlert')
const postData = (form) => {
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const formData = new FormData(form);

        const obj = {}

        formData.forEach((value,key)=>{
            obj[key] = value
        })
        const json = JSON.stringify(obj)

        const request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(json);
        request.addEventListener('load', ()=>{
            if(request.status === 200){
                closeModal();
                ok.classList.add('show');
                ok.style.color = 'greeny';
                setTimeout(()=>(ok.classList.remove('show')), 3000);
               
            } else if(request.status > 400){
                closeModal();
                error.classList.add('show');
                error.style.color = 'red';
                setTimeout(()=>(error.classList.remove('show')), 3000);
            }
        })
    })
}

forms.forEach((item) =>{
    postData(item)
    
})

