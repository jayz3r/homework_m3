const usd = document.querySelector("#usd");
const som = document.querySelector("#som");
const tenge = document.querySelector("#tenge");

const convert = (elem, target, isTrue) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.addEventListener("load", () => {
      const data = JSON.parse(request.response);
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
