// const dataUrl =
//   "https://appworks-school.github.io/Remote-Aassigiment-Data/products";

function ajax(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
function render(data) {
  let words = "";
  for (ele of data) {
    words += `<tr>
    <td>${ele.name}</td>
    <td>${ele.description}</td>
    <td>${ele.price}</td>
    </tr>
    `;
  }
  document.querySelector(".table tbody").innerHTML = words;
}
ajax("https://appworks-school.github.io/Remote-Assignment-Data/products")
  .then((data) => render(data))
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
