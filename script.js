const currentTime = () => {
  let currTime = new Date().toLocaleTimeString();
  document.getElementById("clock").innerText = currTime;
};
currentTime();

setInterval(currentTime, 1000);
