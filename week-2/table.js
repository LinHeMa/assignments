const dataUrl =
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products";

function ajax(url) {
  return fetch(url);
}
ajax(dataUrl)
  .then((response) => {
    return response.json();
  })
  .then((response) => render(response))
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
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
