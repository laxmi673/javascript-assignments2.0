// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer



function season (month){
         
    x = month.toUpperCase()
    // USER PUT INPUT IN ANY CASE WILL MAKE IT UPPER CASE 

    if(x === "SEPTEMBER" || x === "OCTOBER" ||x === "NOVEMBER"){     
        console.log("Autumn");

    }
    
    else if(x === "DECEMBER" || x === "JANUARY" ||x === "FEBRUARY"){     
        console.log("Winter");

    }
    
    else if(x === "MARCH" || x === "APRIL" ||x === "MAY"){     
        console.log("Spring");

    }
    else if(x === "JUN" || x === "JULY" ||x === "AUGUST"){     
        console.log("Summer");

    }
    else{
        console.log("Please Enter valid Month");
    }

}

season("June");