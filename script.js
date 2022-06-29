
    let firstNumber,secondNumber,result,oper;
    firstNumber=prompt("Type first number");
    oper=prompt("Type an operator e.g +, -, /, *, %");
    secondNumber=prompt("Type second number");
   
   
    
    if(oper=="+"){
     result=parseFloat(firstNumber) + parseFloat(secondNumber);
    }
      else if(oper=="/"){
        result=parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    else if(oper=="%"){
        result=parseFloat(firstNumber) % parseFloat(secondNumber);
      }

    else if(oper=="*"){
        result=parseFloat(firstNumber) * parseFloat(secondNumber);  
    }

    else if(oper=="-"){
        result=parseFloat(firstNumber) - parseFloat(secondNumber);
    }

    else if(oper=!null){
     result="Error";
    }
    
    else if(firstNumber=!null){
      result="Error";
    }

    else if(secondNumber=!null){
      firstNumber="Error"; 
    }
  


    window.alert(result);
  
  