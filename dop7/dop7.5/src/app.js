import countTotal from "./utils";
import moment from "moment";
moment().format();

const donates = [];

class Donate {
  constructor(timestamp, amt) {
    this.timestamp = timestamp;
    this.amt = Number(amt);
  }
}

function renderDonates(donate) {
  const donateContainer = document.querySelector(".donates-container__donates");
  const donateLine = document.createElement("div");
  donateLine.className = "donate-item";
  donateLine.innerHTML = `${donate.timestamp} - <b>${donate.amt}$</b>`
  donateContainer.append(donateLine)
  if(donates){
    document.querySelector(".donates-container__title").hidden = false
  }
}

function addDonate(amt) {
  if (Number(amt > 0)) {
    donates.push(new Donate(moment().format("MMMM Do YYYY, h:mm:ss a"), amt))   
    renderDonates(donates[donates.length - 1])
    let sum = countTotal(donates)
    document.querySelector("#total-amount").textContent = sum + "$"
  }
}

function initApp() {
  const btn = document.querySelector(".donate-form__submit-button")
  btn.addEventListener("click", function (event) {
    event.preventDefault()
    addDonate(document.querySelector(".donate-form__donate-input").value)
    document.querySelector(".donate-form__donate-input").value = ''
  })
}

export default initApp
