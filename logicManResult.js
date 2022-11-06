const resultVanilla = document.getElementById("result-vanilla")
const backButton = document.querySelector(".back-button")


const resultRecord = JSON.parse(localStorage.getItem("resultArr"))

averageResult()

function averageResult() {
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

    resultVanilla.innerHTML = `<p>平均身長は${averageHeight}cm</p>
    <p>平均年齢は${averageAge}歳</p>
    <p>平均年収は${averageSalary}万円</p>`
}

// 引数のarrayの平均を計算
function average(arr) {
    let added = 0;
    for (let i = 0; i < arr.length; i++) {
      added += arr[i];
    }
    return added / arr.length;
  }





  backButton.addEventListener("click", ()=>{
    localStorage.clear()
  })