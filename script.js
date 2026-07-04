let count = 0;

let counter = document.getElementById("counter");
let decreaseBtn = document.getElementById("decreaseBtn");
let restartBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");

function updateColor() {
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "balck";
  }
}

increaseBtn.addEventListener("click", function () {
  count++;
  counter.textContent = count;
  updateColor();
});

decreaseBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
    updateColor();
  }
});

restartBtn.addEventListener("click", function () {
  count = 0;
  counter.textContent = count;
  updateColor();
});

// Keyboard Control
document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowUp'){
        count++;
    }
    else if(e.key === 'ArrowDown' && count>0){
        count--;
    }
    else if(e.key === 'r'){
        count = 0;
    }
    counter.textContent = count;
    updateColor();
})