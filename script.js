
// memory price handler





let totalMemoryPrice = 0;

function memoryPrice(a) {


  if (a == '8gb') {

    const samllMemory = document.getElementById('extra-memory-cost');
    const samllMemoryText = samllMemory.innerText;
    const smallMemoryPrice = parseInt(samllMemoryText);
    samllMemory.innerText = 00;
    totalMemoryPrice += 0;

  }
  else if (a == '16gb') {
    const bigMemory = document.getElementById('extra-memory-cost');
    const bigMemoryText = bigMemory.innerText;
    const bigMemoryPrice = parseInt(bigMemoryText) + 180;
    totalMemoryPrice += 180;
    bigMemory.innerText = bigMemoryPrice;

  }
  TotalCheckOut();

}



// storage handling part 


function storagePrice(b) {

  if (b == '256gb') {

    const smallStorage = document.getElementById('extra-storage-cost');
    const smallStorageText = smallStorage.innerText;
    const smallMemoryPrice = parseInt(smallStorageText) + 00;
    smallStorage.innerText = 00;
  }
  else if (b == '512gb') {

    const mediumStorage = document.getElementById('extra-storage-cost');
    const mediumStorageText = mediumStorage.innerText;
    const mediumMemoryPrice = parseInt(mediumStorageText) + 100;

    mediumStorage.innerText = 100;


  }
  else if (b == '1tb') {
    const highStorage = document.getElementById('extra-storage-cost');
    const highStorageText = highStorage.innerText;
    const highMemoryPrice = parseInt(highStorageText) + 180;


    highStorage.innerText = 180;

  }
  TotalCheckOut();

}

// delivery handling part 

function deliverySystem(c) {
  if (c == 'free') {

    const deliveryFree = document.getElementById('delivery-cost');
    const deliveryFreeText = deliveryFree.innerText;
    const deliveryFreeCost = parseInt(deliveryFreeText);

    deliveryFree.innerText = 00;


  }

  else if (c == 'charge') {
    const deliveryCharge = document.getElementById('delivery-cost');
    const deliveryChargeText = deliveryCharge.innerText;
    const deliveryChargeCost = 20;

    deliveryCharge.innerText = deliveryChargeCost;


  }
  TotalCheckOut();

}






// summation of the given price

function TotalCheckOut() {

  const bestPrice = document.getElementById('best-price');
  const bestPriceText = bestPrice.innerText;
  const bestPriceamount = parseInt(bestPriceText);


  const MemoryNewPrice = document.getElementById('extra-memory-cost');
  const MemoryNewPriceText = MemoryNewPrice.innerText;
  const MemoryNewBalance = parseInt(MemoryNewPriceText);


  const storageNewPrice = document.getElementById('extra-storage-cost');
  const storageNewPriceText = storageNewPrice.innerText;
  const storageNewBalance = parseInt(storageNewPriceText);


  const deliveryNewPrice = document.getElementById('delivery-cost');
  const deliveryNewPriceText = deliveryNewPrice.innerText;
  const deliveryNewBalance = parseInt(deliveryNewPriceText);


  const total = document.getElementById('total');
  const totalPriceText = total.innerText;
  const totalBalance = bestPriceamount + deliveryNewBalance + storageNewBalance + MemoryNewBalance;


  // Total Balance part


  const finalPriceEnd = document.getElementById('total-end');
  const finalPriceEndText = finalPriceEnd.innerText;
  const finalPriceEndAmount = parseFloat(finalPriceEndText);


  finalPriceEnd.innerText = totalBalance;

  total.innerText = totalBalance;



};
TotalCheckOut();


// apply pomo code

function pomoApply() {

  const pomoCode = document.getElementById('input-pomo-code');
  const pomoCodeValue = pomoCode.value;

  if (pomoCodeValue == 'stevekaku') {

    const previousBalance = document.getElementById('total');

    const previousBalanceText = previousBalance.innerText;
    const previousBalanceUpdate = parseFloat(previousBalanceText);

    const totalPriceEnd = document.getElementById('total-end');
    const totalPriceText = totalPriceEnd.innerText;
    const totalPriceUpdate = parseInt(totalPriceText);

    const totalPriceLetest = parseFloat(previousBalanceUpdate * 0.8);

    totalPriceEnd.innerText = totalPriceLetest;
    const errorPomoCode = document.getElementById('wrong-pomo-code');

    errorPomoCode.innerText = '';



  }

  else {

    const errorPomoCode = document.getElementById('wrong-pomo-code');

    errorPomoCode.innerText = 'Please give correct pomo code';


    const mainBalance = document.getElementById('total');

    const mainBalanceText = mainBalance.innerText;
    const mainBalanceUpdate = parseFloat(mainBalanceText);

    const finalPrice = document.getElementById('total-end');
    const finalPriceText = finalPrice.innerText;
    const finalPriceAmount = parseFloat(finalPriceText);


    finalPrice.innerText = mainBalanceUpdate;




  }
}