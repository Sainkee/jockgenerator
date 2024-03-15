let btn = document.querySelector(".btn");
let jocks = document.querySelector(".jocks");
let limit = document.querySelector("input[type='number']");
console.log(limit);

btn.addEventListener("click", data);
let key = "dy1B/qwjO373ax5oNT2nCg==gGDsPqpVT2UDHvJO";
console.log(limit.value);

function data() {
  let url = `https://api.api-ninjas.com/v1/dadjokes?limit=${limit.value}`;
  let jock = fetch(url, {
    headers: { "X-Api-Key": key },
    contentType: "application/json",
  });
  jock
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      jocks.innerHTML = "";
      data.forEach((element) => {
        let p = document.createElement("p");
        p.innerText = element.joke;
        jocks.appendChild(p);
      });
    });
}

data();
