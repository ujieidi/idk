let stats = {
  copperOre: 0,
  copperBar: 0,
  money: 0,
};

const miningButton = document.getElementById("miningButton");
const smeltingButton = document.getElementById("smeltingButton");

const oreCount = document.getElementById("ore-count");
const barCount = document.getElementById("bar-count");

function updateDisplay(){
  oreCount.textContent = stats.copperOre;
  barCount.textContent = stats.copperBar;
  
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
    console.log("needs atleast 1 copperOre to smelt")
  }
  updateDisplay();
 };
  
miningButton.addEventListener("click", mineCopper);
smeltingButton.addEventListener("click", smeltCopper);