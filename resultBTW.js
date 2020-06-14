const resultBtw = document.querySelector(".js-result-btw"),
  fromDate = document.querySelector(".js-from"),
  toDate = document.querySelector(".js-to");

const range = [];

function findIndexTo(text) {
  const loadedData = localStorage.getItem(DATA_LS);
  const parsedData = JSON.parse(loadedData);
  function findDate(date) {
    return date.date === text; //이벤트핸들러로 받아온 날짜와 동일한 날짜를 가지고있는 객체를 불러온다
  }
  const foundDate = parsedData.find(findDate);
  console.log(parsedData.indexOf(foundDate)); //같은날짜를 가진 객체의 인덱스
  const objIndex = parsedData.indexOf(foundDate);
  //해당 인덱스 오브젝트 저장
  console.log(dataArr[objIndex]);
  range.push(dataArr[objIndex]);
  getResultFromDates(range);
}

function findIndexFrom(text) {
  const loadedData = localStorage.getItem(DATA_LS);
  const parsedData = JSON.parse(loadedData);
  function findDate(date) {
    return date.date === text;
  }
  console.log(parsedData.find(findDate)); //from 날짜의 오브젝
  const foundDate = parsedData.find(findDate);
  console.log(parsedData.indexOf(foundDate)); //from 오브젝 인덱스
  const objIndex = parsedData.indexOf(foundDate);
  console.log(dataArr[objIndex]);
  range.push(dataArr[objIndex])
  getResultFromDates(range);
}
//++ 주행거리(km)/ 소모된 연료량(l) = 연비+++
//( to 주행거리-from주행거리 )/ 소모 연료량(from-to 모든 연료량 더하기)

function getResultFromDates(range) {
  //index 0:from  1:to
console.log(range)
console.log(range.length)
console.log(range[1].coast)
}

function getDateTo(event) {
  const selectedDateTo = toDate.value;
  findIndexTo(selectedDateTo);
}
function getDateFrom(event) {
  const selectedDateFrom = fromDate.value;
  findIndexFrom(selectedDateFrom);
}

function init() {
  fromDate.addEventListener("change", getDateFrom);
  toDate.addEventListener("change", getDateTo);
}
init();
