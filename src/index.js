import "./style.css";
import foodImage from "./food.jpg";

const mainDiv = document.querySelector("#content");
mainDiv.classList.add("text-color");

const bkgImage = new Image();
bkgImage.src = foodImage;
