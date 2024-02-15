var totalPrice = document.querySelector("#TP")
var pricePerOne = document.querySelectorAll('#p') /*array*/
var plus = document.querySelectorAll('#plus')    /*array*/
var q = document.querySelectorAll('#q')  /*array*/
var mins = document.querySelectorAll('#mins')
var hearts = document.querySelectorAll('#heart')
var garbages = document.querySelectorAll('#garbage')
var cards = document.querySelectorAll('#carddd')

var heartStates = new Array(hearts.length).fill(false); // Initialize an array to track the state of each heart

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function loveIt() {
        heartStates[i] = !heartStates[i]; // Toggle the state (true/false) for the clicked heart
        console.log(heartStates);

        if (heartStates[i]) {
            hearts[i].style.color = 'red';
        } else {
            hearts[i].style.color = 'black';
        }
    });
}

for (let i = 0 ; i < garbages.length ; i++){
    garbages[i].addEventListener("click", function remove(){
        cards[i].remove()
    })
}




console.log(totalPrice.innerHTML)
function tp (){
    let sum=0;
    for(let i=0;i<pricePerOne.length;i++){
    sum += q[i].innerHTML*pricePerOne[i].innerHTML
    console.log(sum)
}
 totalPrice.innerHTML = sum
 return totalPrice
}





for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", (function (i) { return function quantity() {
        q[i].innerHTML = parseInt(q[i].innerHTML) + 1;
        return tp()
      };
    })(i));

  }
  
  for (let i = 0 ; i < mins.length; i++){
    mins[i].addEventListener('click', function quantity () {
        if (parseInt(q[i].innerHTML) > 0){
            q[i].innerHTML = parseInt(q[i].innerHTML) -  1
            return tp()
    
        }
        
    })
}

    
