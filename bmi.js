const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result'); // Fixed ID reference

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight.`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = "";

        if (bmi < 18.6) {
            category = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "Normal weight";
        } else {
            category = "Overweight";
        }

        // Show BMI value and category
        results.innerHTML = `<span>Your BMI is: ${bmi} (${category})</span>`;
    }
});
