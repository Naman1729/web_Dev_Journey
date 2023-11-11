const form = document.querySelector("form")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    
    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseFloat(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const position = document.querySelector("#position")

    if(height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Please provide a valid height"
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please provide a valid weight"
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        
        if(bmi <= 18.5) {
            position.innerHTML += `<span>Under Weight</span>`
        } else if (bmi > 18.5 && bmi < 25) {
            position.innerHTML += `<span>Normal Range</span>`
        }
        else if (bmi >= 25 && bmi < 30) {
            position.innerHTML += `<span>Overweight</span>`
        }
        else {
            position.innerHTML += `<span>Obese</span>`
        }
    }
})