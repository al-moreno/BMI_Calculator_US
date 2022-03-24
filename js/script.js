window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};


function calculateBMI(e) {
    e.preventDefault();
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let feet = parseInt(document.querySelector("#feet").value);
    console.log(feet);

    let inches = parseInt(document.querySelector("#inches").value);
    let inchTotal = inches * 0.1;
    console.log(inches);
    console.log(inchTotal);

    let height = feet + (inches * 0.1);
    console.log(height);

    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document.querySelector("#weight").value);
    console.log(weight);

    let result = document.querySelector("#result");
    let heightInInches = (feet * 12);
    let feetForCalculation = (heightInInches + inches);
    console.log(heightInInches + inches);


    // Checking the user providing a proper
    // value or not
    if (feet === "" || feet < 0 || feet > 8 || isNaN(height))
        result.innerHTML = "Please provide a valid height between 0 - 8!";

    else if (inches === "" || inches < 0 || inches > 11 || isNaN(height))
        result.innerHTML = "Please provide a valid height between 0 - 11!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Please provide a valid weight in lbs!";

    // If both input is valid, calculate the bmi
    else {

        let bmi = ((weight * 703) / (feetForCalculation * feetForCalculation)).toFixed(2);
        console.log(bmi);

        // Dividing as per the bmi conditions
        if (bmi < 18.5) {
            result.innerHTML =
            `Under Weight : <span>${bmi}</span> <br> <img style="width:180px;height:auto;margin-top:10px;"src="./image/underWeight.jpg">`;


        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML =
                `Normal : <span>${bmi}</span> <br> <img style="width:180px;height:auto;margin-top:10px;"src="./image/healthyWeight.jpg">`;

        } else if (bmi >= 24.9 && bmi < 29.9) {
            result.innerHTML =
                `Over Weight : <span>${bmi}</span> <br> <img style="width:180px;height:auto;margin-top:10px;"src="./image/overWeight.jpg">`;

        } else if (bmi >= 29.9 && bmi < 35) {
            result.innerHTML =
                `Obese Range : <span>${bmi}</span> <br> <img style="width:180px;height:auto;margin-top:10px;"src="./image/obeseWeight.jpg">`;

        } else result.innerHTML =
            `Extream Obese Weight : <span>${bmi}</span> <br> <img style="width:180px;height:auto;margin-top:10px;"src="./image/extremeObeseWeight.jpg">`;

    }
}