"use strict";
{

  const carePrice = {
    careLevel1: {
      short: 332,
      long: 629,
    },
    careLevel2: {
      short: 386,
      long: 754,
    },
    careLevel3: {
      short: 439,
      long: 874,
    },
    careLevel4: {
      short: 493,
      long: 1019,
    },
    careLevel5: {
      short: 547,
      long: 1161,
    },
  };

  const btn = document.getElementById('btn');
  const answer = document.getElementById('answer');
  const careLevel = document.getElementById('careLevel');
  const proportion = document.getElementById('proportion');
  const time = document.getElementById('time');
  const frequency = document.getElementById('frequency');
  let price = 0;


function calculatePrice(){
  price =  carePrice[careLevel.value][time.value]
  switch(frequency.value){
    case 'fre1':
      price *= 4;
      break;
    case 'fre2':
      price *= 8;
      break;
    case 'fre3':
      price *= 12;
      break;
    case 'fre4':
      price *= 16;
      break;
    case 'fre5':
      price *= 20;
      break;
    case 'fre6':
      price *= 24;
      break;
    case 'fre7':
      price *= 28;
      break;
  }

  if(proportion.value === 'proportion2'){
    price *= 2;
  }

  console.log(price)
  showPrice();
}

function showPrice(){
  answer.textContent = price;
}


  btn.addEventListener('click', () => {
    
    calculatePrice()
    
  });
  
}
