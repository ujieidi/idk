let stats = {
  copperOre: 0,
  copperBar: 0,
  money: 0,
};

const miningButton = document.getElementById("miningButton");
const smeltingButton = document.getElementById("smeltingButton");
const sellButton = document.getElementById("sellButton")

const oreCount = document.getElementById("ore-count");
const barCount = document.getElementById("bar-count");
const moneyCount = document.getElementById("money-count")

function updateDisplay(){
  oreCount.textContent = stats.copperOre;
  barCount.textContent = stats.copperBar;
  moneyCount.textContent = stats.money;
};

function mineCopper(){
  stats.copperOre++;
  updateDisplay();
};

function smeltCopper(){
  if(stats.copperOre >= 1){
    stats.copperOre--;
    stats.copperBar++;
  }
  else{
    console.log("not enough copperOre")
  }
  updateDisplay();
};
 
function sell(){
  if (stats.copperBar >= 1){
    stats.copperBar--;
    stats.money += 10;
  }
  else {
    console.log("not enough copperBar")
  };
  updateDisplay();
};
  
miningButton.addEventListener("click", mineCopper);
smeltingButton.addEventListener("click", smeltCopper);
sellButton.addEventListener("click", sell  )


//i will not be using abbreviation mostly since it may confuse myself