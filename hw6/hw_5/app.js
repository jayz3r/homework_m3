const usd = document.querySelector("#usd");
const som = document.querySelector("#som");
const tenge = document.querySelector("#tenge");


const postData = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
const convert = (elem, target, isTrue) => {
  elem.addEventListener("input", () => {
    postData("data.json", {}).then((data) => {
      if (isTrue === "usd-som") {
        target.value = (elem.value * data.usd).toFixed(2);
      } else if (isTrue === "som-usd") {
        target.value = (elem.value / data.usd).toFixed(2);
      } else if (isTrue === "tenge-som") {
        target.value = (elem.value * data.tenge).toFixed(2);
      } else if (isTrue === "som-tenge") {
        target.value = (elem.value / data.tenge).toFixed(2);
      } else if (isTrue === "usd-tenge") {
        target.value = (elem.value * data.usd / data.tenge).toFixed(2);
      } else if (isTrue === "tenge-usd") {
        target.value = (elem.value * data.tenge / data.usd).toFixed(2);
      }
    
      elem.value === "" && (target.value = "");
    });
    });
  };

const arr = [
    {
        elem: som,
        target: usd,
        isTrue: "som-usd",
      },
      {
        elem: usd,
        target: som,
        isTrue: "usd-som",
      },
      {
        elem: tenge,
        target: som,
        isTrue: "tenge-som",
      },
      {
        elem: som,
        target: tenge,
        isTrue: "som-tenge",
      },
      {
        elem: usd,
        target: tenge,
        isTrue: "usd-tenge",
      },
      {
        elem: tenge,
        target: usd,
        isTrue: "tenge-usd",
      }
];

arr.forEach((item) => {
  convert(item.elem, item.target, item.isTrue);
});
