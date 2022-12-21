const TIME = document.getElementById("clock-js");

function getTime() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  TIME.innerHTML = `
      ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }
    `;
  console.log(TIME);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
