function bmi(weight, height){
    const calc = (weight) / (height * height)
    if(calc <= 18.5){
        return "Underweight"
    }else if(calc <= 25.0){
        return "Normal"
    }else if(calc <= 30.0){
        return "Overweight"
    }else if(calc > 30){
        return "Obese"
    }else{
        return "";
    }
}