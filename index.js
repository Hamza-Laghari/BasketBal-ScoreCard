let r1 = document.getElementById("reset")
//let r2 = document.getElementById("reset2")

let h1 = document.getElementById("haddone")
let h2 = document.getElementById("haddtwo")
let h3 = document.getElementById("haddthree")
let h = document.getElementById("homescore")

let g1 = document.getElementById("waddone")
let g2 = document.getElementById("waddtwo")
let g3 = document.getElementById("waddthree")
let g = document.getElementById("guestscore")
let homescore = 0;
let guestscore = 0;



    function addOne(){
        homescore +=1
        h.textContent = homescore
    }

      function addTwo(){
        homescore +=2
        h.textContent = homescore
    }

    function addThree(){
    homescore +=3 
    h.textContent = homescore
    }

    function  gaddOne(){
        guestscore +=1
        g.textContent = guestscore
    }

    function gaddTwo(){
        guestscore +=2
    g.textContent = guestscore
    }

    function gaddThree(){
        guestscore +=3
        g.textContent = guestscore
    }

    function resetscore1(){
     if(homescore>>0||guestscore>>0)
     {
        homescore = 0;
        guestscore = 0;
        g.textContent = guestscore
        h.textContent = homescore
     }
     else alert("Score is already zero!!")
    }

    let count = 0;
    let countt = document.getElementById("countdown2")
    const countdownEl = document.getElementById("countdown")  
   
    // function h(){
        setInterval(updateCountdown, 1000);
       
             const startMinutes = 10;
             let time = startMinutes * 60;
          
            
             function updateCountdown(){
           
             const minutes = Math.floor(time/60);
             let second  = time % 60;
    
             second = second < 10 ? '0' + second : second;
             countdownEl.innerHTML = "0"+`${minutes}:${second}`;
             time--;
        }
    // }
        
    function hey(){
       alert("Hey")
       h();
    }

    

    
    // function resetscore2(){
    //     guestscore = 0;
    //     g.textContent = guestscore
    // }