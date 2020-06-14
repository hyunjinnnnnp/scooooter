const form = document.querySelector("#js-form"),
  input_date = document.querySelector(".js-date"),
  input_coast = document.querySelector(".js-coast"),
  input_liter = document.querySelector(".js-literFilled"),
  input_totalTrip = document.querySelector(".js-totalTrip"),
  submit = document.querySelector(".js-submit"),
  result = document.querySelector(".js-result");

const DATA_LS = "dataArr";
let dataArr = [];

const title = document.querySelector(".js-title");
const currentDate = "currentDate",
  currentCoast = "currenCoast",
  currentLiter = "currentLiter",
  currentTotalTrip = "currentTotalTrip";

function saveCurrent(dataObj) {
  localStorage.setItem(DATA_LS, JSON.stringify(dataArr));
}

function resultShowing(text) {
  const latestResultIs = document.createElement("span");
  const calcResult = document.createElement("span");
  const span = document.createElement("span");
  latestResultIs.innerHTML = "최근 날짜 사이 연비는";
  calcResult.innerHTML = text;
  span.innerHTML = "km/l 입니다";

  result.appendChild(latestResultIs);
  result.appendChild(calcResult);
  result.appendChild(span);
  console.log(result);
}
function calculate() {
  //array 마지막 리스트(렝스-1)와 그 전 리스트(렝스-2) 차이를 계산한다
  //이번 총 주행거리 - 이전 총 주행거리 /이번 주유리터

  const loadedData = localStorage.getItem(DATA_LS);
  const parsedData = JSON.parse(loadedData);
  if(parsedData !==null){
  const currentTotalTrip = parsedData[parsedData.length - 1].totalTrip;
  const previousTotalTrip = parsedData[parsedData.length - 2].totalTrip;
  const currentCharge = parsedData[parsedData.length - 1].liter;
  const result = (currentTotalTrip - previousTotalTrip) / currentCharge;

  resultShowing(result);
  }
}

function drawSubmit(obj) {
  const li = document.createElement("li");
  const date = document.createElement("div");
  const coast = document.createElement("div");
  const won = document.createElement("span");
  const liter = document.createElement("div");
  const l = document.createElement("span");
  const totalTrip = document.createElement("div");
  const km = document.createElement("span");
  const newId = new Date();

  date.innerHTML = obj.date;
  coast.innerHTML = obj.coast;
  won.innerHTML = "원";
  liter.innerHTML = obj.liter;
  l.innerHTML = "L";
  totalTrip.innerHTML = obj.totalTrip;
  km.innerHTML = "Km";

  li.appendChild(date);
  li.appendChild(coast);
  coast.appendChild(won);
  li.appendChild(liter);
  liter.appendChild(l);
  li.appendChild(totalTrip);
  totalTrip.appendChild(km);
  li.id = newId;
  title.appendChild(li);

  const dataObj = {
    date: obj.date,
    coast: obj.coast,
    liter: obj.liter,
    totalTrip: obj.totalTrip,
    id: newId,
  };

  dataArr.push(dataObj);
  saveCurrent(dataObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentSubmit = {
    date: currentDate,
    coast: currentCoast,
    liter: currentLiter,
    totalTrip: currentTotalTrip,
  };
  const date_value = input_date.value;
  currentSubmit.date = date_value;
  const coast_value = input_coast.value;
  currentSubmit.coast = coast_value;
  const liter_value = input_liter.value;
  currentSubmit.liter = liter_value;
  const trip_value = input_totalTrip.value;
  currentSubmit.totalTrip = trip_value;

  drawSubmit(currentSubmit); //obj로 받아서 사용할 거야
}

function loadData() {
  const loadedData = localStorage.getItem(DATA_LS);
  if (loadedData !== null) {
    const parsedData = JSON.parse(loadedData);
    parsedData.forEach(function (dataArr) {
      drawSubmit(dataArr);
    });
  }
}

function init() {
  form.addEventListener("submit", handleSubmit);
  loadData();
  calculate();
}
init();
