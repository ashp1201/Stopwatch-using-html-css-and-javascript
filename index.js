const time = document.getElementById("time");

const mins_div = document.getElementById("mins");
const secs_div = document.getElementById("secs");
const msecs_div = document.getElementById("msec");
const lap_reset_btn = document.getElementById("lap_reset_btn");
const start_stop_btn = document.getElementById("start_stop_btn");
// const lap = document.getElementById("lap");
// const lap1 = document.getElementById("lap1");
// const lap2 = document.getElementById("lap2");

const container = document.getElementById("container");

var mins = 0;
var secs = 0;
var msecs = 0;

var timer;

function start_stop() {
  if (start_stop_btn.innerHTML == "Start") {
    timer = setInterval(function () {
      msecs++;
      if (msecs == 100) {
        msecs = 0;
        secs++;
      }
      if (secs == 60) {
        secs = 0;
        mins++;
      }
      if (mins == 60) {
        mins = 0;
      }

      if (msecs < 10) {
        msecs_div.innerHTML = "0" + msecs.toString();
      } else {
        msecs_div.innerHTML = msecs.toString();
      }
      if (secs < 10) {
        secs_div.innerHTML = "0" + secs.toString();
      } else {
        secs_div.innerHTML = secs.toString();
      }
      if (mins < 10) {
        mins_div.innerHTML = "0" + mins.toString();
      } else {
        mins_div.innerHTML = mins.toString();
      }
    }, 10);
    start_stop_btn.innerText = "Stop";
    start_stop_btn.classList.add("stop");
    lap_reset_btn.innerText = "Split";
  } else {
    clearInterval(timer);
    start_stop_btn.innerText = "Start";
    start_stop_btn.classList.remove("stop");
    lap_reset_btn.innerText = "Reset";
  }
}

let i = 0;
function create_lap_or_reset() {
  if (lap_reset_btn.innerHTML == "Split") {
    console.log(i);

    // lap.style.display = 'flex';
    let lap_text = time.innerText;

    // let count = i;
    // lap2.innerHTML = lap_text;
    // lap1.innerHTML = `# ${count}`
    i++;
    let count = i;

    // Create lap entry elements
    const lapEntry = document.createElement("div");
    lapEntry.classList.add("lap");

    const lap1Entry = document.createElement("div");
    lap1Entry.classList.add("lap1");
    lap1Entry.innerHTML = `# ${count}`;

    const lap2Entry = document.createElement("div");
    lap2Entry.classList.add("lap2");
    lap2Entry.innerHTML = lap_text;

    const lap3Entry = document.createElement("div");
    lap3Entry.classList.add("lap3");
    lap3Entry.innerHTML = "Split";

    // Append lap entry elements to lap container
    lapEntry.appendChild(lap1Entry);
    lapEntry.appendChild(lap2Entry);
    lapEntry.appendChild(lap3Entry);
    container.appendChild(lapEntry);
    // lap.style.display = 'flex';
  } else {
    mins = 0;
    secs = 0;
    msecs = 0;
    mins_div.innerText = "00";
    secs_div.innerText = "00";
    msecs_div.innerText = "00";
    container.innerHTML = "";
    i = 0;
  }
}

start_stop_btn.onclick = start_stop;
lap_reset_btn.onclick = create_lap_or_reset;
