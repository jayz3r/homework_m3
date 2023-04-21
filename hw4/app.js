const wrapper = document.querySelector(".wrapper");
const getData = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "data.json");
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.addEventListener("load", () => {
    const data = JSON.parse(request.response);
    console.log(data);
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
  });
};
getData();