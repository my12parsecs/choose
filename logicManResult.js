const resultVanilla = document.getElementById("result-vanilla")
const resultShow = document.getElementById("result-show")
const resultCount = document.getElementById("result-count")

const backButton = document.querySelector(".back-button")


const resultRecord = JSON.parse(localStorage.getItem("resultArr"))

averageResult()
show()


function averageResult() {
    // 数字の項目を平均値に
    let heightArr = []
    let ageArr = []
    let salaryArr = []
    for(let i = 0; i < resultRecord.length; i++){
      heightArr.push(resultRecord[i][1])
      ageArr.push(resultRecord[i][2])
      salaryArr.push(resultRecord[i][4])
    }
    const averageHeight = average(heightArr.map(Number))
    const averageAge = average(ageArr.map(Number))
    const averageSalary = average(salaryArr.map(Number))

    // 学歴を数える
    let nitto = 0
    let march = 0
    let sokei = 0
    let todai = 0
    for(let i = 0; i < resultRecord.length; i++){
      const school = resultRecord[i][3]
      if(school === "日東駒専"){
        nitto++
      }else if(school === "MARCH"){
        march++
      }else if(school === "早慶"){
        sokei++
      }else if(school === "東大"){
        todai++
      }
    }

    resultVanilla.innerHTML = `
    <div class="result-vanilla-1">
    <p>平均身長は${averageHeight}cm</p>
    <p>平均年齢は${averageAge}歳</p>
    <p>平均年収は${averageSalary}万円</p>
    </div>
    <div class="result-vanilla-2">
    <p>東大: ${todai}</p>
    <p>早慶: ${sokei}</p>
    <p>MARCH: ${march}</p>
    <p>日東駒専: ${nitto}</p>
    </div>`
}

// 引数のarrayの平均を計算
function average(arr) {
    let added = 0;
    for (let i = 0; i < arr.length; i++) {
      added += arr[i];
    }
    return added / arr.length;
  }



function show(){
  resultShow.innerHTML = `${resultRecord}`
}







  backButton.addEventListener("click", ()=>{
    localStorage.clear()
  })