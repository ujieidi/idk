let stats = {
  copperOre: 0,
  copperBar: 0,
  money: 0,
};

let copperIsSmelting = false;
let isMiningCopper = false;

const mineCopperButton = document.getElementById("mineCopper");
const smeltCopperButton = document.getElementById("smeltCopper");
const sellButton = document.getElementById("sellCopper")

const oreCount = document.getElementById("ore-count");
const barCount = document.getElementById("bar-count");
const moneyCount = document.getElementById("money-count")

function updateButtons(){
  smeltCopperButton.disabled = copperIsSmelting;
  mineCopperButton.disabled = isMiningCopper;
}

function updateDisplay(){
  oreCount.textContent = stats.copperOre;
  barCount.textContent = stats.copperBar;
  moneyCount.textContent = stats.money;
  
  updateButtons();
};

function mineCopper(){
  stats.copperOre++;
  updateDisplay();
};

function smeltCopper(){
  if(stats.copperOre >= 1 && !copperIsSmelting){
    copperIsSmelting = true;
    smeltCopperButton.textContent = "SMELTING...";
    stats.copperOre--;
    updateDisplay();
    
    setTimeout(() => {
      copperIsSmelting = false;
      smeltCopperButton.textContent = "SMELT COPPER ORE";
      stats.copperBar++;
      updateDisplay();
    }, 1000);
  }
  else{
    console.log("not enough copperOre or smelting already")
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
  
mineCopperButton.addEventListener("click", mineCopper);
smeltCopperButton.addEventListener("click", smeltCopper);
sellButton.addEventListener("click", sell)