document.addEventListener('DOMContentLoaded', function(){
     document.getElementById('sizeForm').addEventListener('submit', function(event){
        event.preventDefault();
        
        var height = parseFloat(document.getElementById ('height').value);
        var weight = parseFloat (document.getElementById('weight').value);
        var age = parseFloat (document.getElementById('age').value, 10);


        if (isNaN(height) || isNaN(weight) || isNaN(age) || height<=0 || weight<= 0){
            document.getElementById('result').textContent = 'Please enter a valid number';
            return;
        }

        var heightinmeters= height / 100;
        var bmi= weight/(heightinmeters*heightinmeters);
        var size;

        if (bmi<18.5){
            size = 'XS';
        }
        else if (bmi >= 18.5 && bmi < 22.5){
            size = 'S';
        }
        else if (bmi >= 22.5 && bmi < 25){
            size = 'M';
        }
        else if (bmi >= 25 && bmi < 27.5){
            size = 'L';
        }
        else if (bmi >= 27.5 && bmi < 30){
            size = 'XL';
        }
        else {
            size = 'XXL';
        }

        var resultText = `Size: ${size}`

        document.getElementById ('result').textContent= resultText;



     })
})