import {
  looksOption,
  heightOption,
  ageOption,
  schoolOption,
  jobOption,
  careerOptionNTKS,
  careerOptionMarch,
  careerOptionSokei,
  careerOptionTodai,
  careerSalaryFreeter,
  careerSalaryKeiyaku,
  careerSalaryLow,
  careerSalaryMiddle,
  careerSalaryHigh,
  careerSalaryEntrepreneur,
  earlyTwenties,
  lateTwenties,
  earlyThirties,
  lateThirties,
  forties,
  fifty
} from "./options.js";

const startBtn = document.getElementById("start");

const optionSplit = document.querySelector(".option-split")
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");

let manOption1;
let manOption2;

let resultRecord = [];

// やること
// 結果の出し方どうする？　各要素の平均、要素比較プラマイ、　最終的には他の人のも

// 芸能人の顔？いらすとや？無名人の顔？

// local storageで結果をresultページに送る

startBtn.addEventListener("click", () => {
  renewOptions();
  optionSplit.classList.remove("hidden")
});

option1.addEventListener("click", () => {
  resultRecord.push(manOption1);
  if (resultRecord.length > 4) {
    finish();
    return;
  }
  renewOptions();
});

option2.addEventListener("click", () => {
  resultRecord.push(manOption2);
  if (resultRecord.length > 4) {
    finish();
    return;
  }
  renewOptions();
});

// 男を2人生成して選択ボタンに表示
function renewOptions() {
  manOption1 = generateMan();
  manOption2 = generateMan();

  option1.innerHTML = `<img src="${manOption1[0]}" />
  <div class="option-detail">
    <p>${manOption1[1]}cm</p>
    <p>${manOption1[2]}歳</p>
    <p>${manOption1[3]}卒</p>
    <p>${manOption1[4]}万円/年</p>
  </div>
  `;
  option2.innerHTML = `<img src="${manOption2[0]}" />
  <div class="option-detail">
    <p>${manOption2[1]}cm</p>
    <p>${manOption2[2]}歳</p>
    <p>${manOption2[3]}卒</p>
    <p>${manOption2[4]}万円/年</p>
  </div>
  `;
}

// ランダムな男を作り出す
function generateMan() {
  const manArr = [
    randomer(looksOption),
    randomer(heightOption),
    randomer(ageOption),
    randomer(schoolOption),
    0,
  ];

  if (Math.floor(manArr[2]/5) === 4) {
    // 20代前半
    manArr[0] = randomer(earlyTwenties);
  }else if(Math.floor(manArr[2]/5) === 5){
    // 20代後半
    manArr[0] = randomer(lateTwenties)
  }else if(Math.floor(manArr[2]/5) === 6){
    // 30代前半
    manArr[0] = randomer(earlyThirties)
  }else if(Math.floor(manArr[2]/5) === 7){
    // 30代後半
    manArr[0] = randomer(lateThirties)
  }else if(Math.floor(manArr[2]/5) === 8){
    // 40代
    manArr[0] = randomer(forties)
  }else if(Math.floor(manArr[2]/5) === 10){
    // 50歳
    manArr[0] = randomer(fifty)
  }

  let career;
  if (manArr[3] === "日東駒専") {
    career = randomer(careerOptionNTKS);
  } else if (manArr[3] === "MARCH") {
    career = randomer(careerOptionMarch);
  } else if (manArr[3] === "早慶") {
    career = randomer(careerOptionSokei);
  } else if (manArr[3] === "東大") {
    career = randomer(careerOptionTodai);
  }

  if (career === "無職") {
    manArr[4] = 0;
  } else if (career === "フリーター") {
    manArr[4] = careerSalaryFreeter[manArr[2]];
  } else if (career === "契約社員") {
    manArr[4] = careerSalaryKeiyaku[manArr[2]];
  } else if (career === "下級正社員") {
    manArr[4] = careerSalaryLow[manArr[2]];
  } else if (career === "中級正社員") {
    manArr[4] = careerSalaryMiddle[manArr[2]];
  } else if (career === "上級正社員") {
    manArr[4] = careerSalaryHigh[manArr[2]];
  } else if (career === "経営者") {
    manArr[4] = careerSalaryEntrepreneur[manArr[2]];
  }
  return manArr;
}

// 1~100の中からランダムな数をつくり、引数のオブジェクトで対応するものを返す
function randomer(optionObj) {
  const random = Math.floor(Math.random() * 100);
  let result = "";
  let rate = 0;
  for (const prop in optionObj) {
    rate += optionObj[prop];
    if (random <= rate) {
      result = prop;
      break;
    }
  }
  return result;
}

// 終了したときにやること
function finish() {
  localStorage.setItem("resultArr", JSON.stringify(resultRecord));
  window.location.href = "./result.html"
}



console.log(Math.floor(33/5));