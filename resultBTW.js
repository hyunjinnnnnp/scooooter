const resultBtw = document.querySelector(".js-result-btw"),
  fromDate = document.querySelector(".js-from"),
  toDate = document.querySelector(".js-to");
 
  const obj=new Object()

function findIndexTo(text) {
  const loadedData = localStorage.getItem(DATA_LS);
  const parsedData = JSON.parse(loadedData);
  function findDate(date) {
    return date.date === text; //이벤트핸들러로 받아온 날짜와 동일한 날짜를 가지고있는 객체를 불러온다
  }
  const foundDate = parsedData.find(findDate);
  const objIndex = parsedData.indexOf(foundDate); //같은날짜를 가진 객체의 인덱스
  //해당 인덱스 오브젝트 저장
  //dataArr[objIndex]  객체로 저장
  obj.to=dataArr[objIndex]
  getResultFromDates(obj.to);
}

function findIndexFrom(text) {
  const loadedData = localStorage.getItem(DATA_LS);
  const parsedData = JSON.parse(loadedData);
  function findDate(date) {
    return date.date === text;
  }
  const foundDate = parsedData.find(findDate);//from 날짜의 오브젝
  const objIndex = parsedData.indexOf(foundDate); //from 오브젝 인덱스
 obj.from=dataArr[objIndex]
  getResultFromDates(obj.from);

}
//++ 주행거리(km)/ 소모된 연료량(l) = 연비+++
//( to 주행거리-from주행거리 )/ 소모 연료량(from-to 모든 연료량 더하기)

function getResultFromDates() {
  console.log(obj)
  const previousFrom=obj.from;
  const currentFrom=obj.to;
  console.log(currentFrom, previousFrom)
  console.log(currentFrom.totalTrip - previousFrom.totalTrip)
  //previous~current까지 날짜별 주유량 다 더해야함??
  
  
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
