//標題更改功能
const welcomeMsg = document.getElementById("welcome");
const welcomeMsgHandler = () => {
  if (welcomeMsg.textContent === "Have a good time!") {
    welcomeMsg.innerHTML = "<h1>Welcome Message</h1>";
    return;
  }
  welcomeMsg.innerHTML = "<h1>Have a good time!</h1>";
};
welcomeMsg.addEventListener("click", welcomeMsgHandler);

//關閉功能
const menu = document.getElementsByClassName("nav_menu")[0];
const menuCross = document.getElementsByClassName("menu_cross")[0];

const closeMenu = () => {
  menu.classList.remove("active");
};
menuCross.addEventListener("click", closeMenu);

//選單功能
const toggleBtn = document.querySelector(".toggle_btn");
const toggle = () => {
  menu.classList.add("active");
};
toggleBtn.addEventListener("click", toggle);

//call to action
const moreContent = document.querySelector(".more_content");
const showMoreBtn = document.querySelector(".show_more");
showMoreBtn.addEventListener("click", () => {
  moreContent.classList.toggle("active");
});
//call to action end

//AJAX begin
const dataUrl =
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products";
const xhr = new XMLHttpRequest();

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

// AJAX ends
