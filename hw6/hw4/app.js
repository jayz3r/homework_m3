const wrapper = document.querySelector(".wrapper");

const postData = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
const getData = () => {
  postData("data.json", {}).then((data) => { 

    Object.values(data.obj).forEach((items) => {
      items.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;
        card.append(img);
        
        const name = document.createElement("h2");
        name.textContent = item.name;
        card.append(name);
        
        const price = document.createElement("p");
        price.style.fontWeight = 'bold';
        price.style.fontSize = '19px'
        price.textContent = item.price;
        card.append(price);
        
        const description = document.createElement("p");
        description.textContent = item.description;
        card.append(description);
        
        const btn = document.createElement('button');
        btn.textContent = 'Купить';
        card.append(btn)
        
        wrapper.append(card);
      });
    });
  }) 
};
getData();