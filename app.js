function house(n){
    //first part even
    if(n >= 2 && n <= 100){
        if(n % 2 === 0){
            for(let i = 0; i < n / 2; i++){
                let dash = "";
                for(let j = 1; j < n / 2 - i; j++){
                    dash += "-";
                }
                let star = 0;
                for(let j = 0; j <= i; j++){
                    star += 2;
                }
                console.log(dash + "*".repeat(star) + dash);
            }
            //second part even
            for(let i = 0; i < n / 2; i++){
                let line = ""
                for(let k = 0; k < n; k++){
                    line = "|";
                }
                let star = "";
                for(let j = 0; j < n / 2; j++){
                    star = '*';
                }
                console.log(line + star.repeat(n-2) + line);
            }
        } else{
            //first part odd
            let num = Math.ceil(n / 2);
            for(let i = 0; i < num; i++){
                let dash = "";
                for(let j = 1; j < n / 2 - i; j++){
                    dash += "-";
                }
                let star = 1;
                for(let j = 0; j <= i; j++){
                    star += 2;
                }
                console.log(dash + "*".repeat(star-2) + dash);
            }
            //second part odd
            let numFloor = Math.floor(n / 2);
            for(let i = 0; i < numFloor; i++){
                let line = "";
                for(let j = 0; j < n; j++){
                    line = "|";
                }
                let star = "";
                for(let k = 0; k < n; k++){
                    star = "*";
                }
                console.log(line + star.repeat(n - 2) + line)
            }
        }
    }else{
        console.log("Error! You should put number between 2 and 100.")
    }
}
house(5);