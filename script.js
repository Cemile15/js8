     for (let i = 1; i <= 20; i++) {
        let sss = document.getElementById("div" + i);
        if(i % 2 == 0){
            sss.style.backgroundColor = "red";
        }
        else{
            sss.style.backgroundColor = "yellow";
        }
        if(i % 5 == 0){
            sss.style.backgroundColor = "blue";
        }
    }

  