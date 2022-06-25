
    let x,y,z,oper;
    x=prompt("Type first number");
    oper=prompt("Type an operator e.g +, -, /, *, %");
    y=prompt("Type second number");
   
   
    
    if(oper=="+"){
      z=parseFloat(x) + parseFloat(y);
    }
      else if(oper=="/"){
        z=parseFloat(x) / parseFloat(y);
    }

    else if(oper=="%"){
        z=parseFloat(x) % parseFloat(y);
      }

    else if(oper=="*"){
        z=parseFloat(x) * parseFloat(y);  
    }

    else if(oper=="-"){
        z=parseFloat(x) - parseFloat(y);
    }

    else if(oper=!null){
      z="Error";
    }
    
    else if(x=!null){
      z="Error";
    }

    else if(y=!null){
      z="Error"; 
    }
  


    window.alert(z);
  
  