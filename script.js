function convertTemperature() {
    // Get the input value and selected units
    let degreeInput = parseFloat(document.getElementById("degreeInput").value);
    let inputUnit = document.getElementById("inputUnit").value;
    let conversionUnit = document.getElementById("conersionInput").value;
  
    let result;
  
    // Temperature conversion logic
    if (inputUnit === "celsius") {
      if (conversionUnit === "Farenheit") {
        result = (degreeInput * 9/5) + 32; // Celsius to Fahrenheit
      } else if (conversionUnit === "kelvin") {
        result = degreeInput + 273.15; // Celsius to Kelvin
      } else {
        result = degreeInput; // Celsius to Celsius (no change)
      }
    } else if (inputUnit === "Farenheit") {
      if (conversionUnit === "celsius") {
        result = (degreeInput - 32) * 5/9; // Fahrenheit to Celsius
      } else if (conversionUnit === "kelvin") {
        result = ((degreeInput - 32) * 5/9) + 273.15; // Fahrenheit to Kelvin
      } else {
        result = degreeInput; // Fahrenheit to Fahrenheit (no change)
      }
    } else if (inputUnit === "kelvin") {
      if (conversionUnit === "celsius") {
        result = degreeInput - 273.15; // Kelvin to Celsius
      } else if (conversionUnit === "Farenheit") {
        result = (degreeInput - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
      } else {
        result = degreeInput; // Kelvin to Kelvin (no change)
      }
    }
  
    // Update the result section with the converted value
    document.getElementById("convertedDegree").innerHTML = result.toFixed(2); // Display result rounded to 2 decimal places
    document.getElementById("convertedUnit").innerHTML = conversionUnit.charAt(0).toUpperCase(); // Display the first letter of the conversion unit
  }