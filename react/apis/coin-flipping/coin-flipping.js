function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }



function fiveHeads() {
  return new Promise( (resolve, reject) => {
    let attempts = 0;
    let headsCount = 0;
    while(headsCount < 5 && attempts < 100) {
      attempts++;
      let result = tossCoin();
      result === "heads" ? headsCount++ : headsCount = 0;
    }
    if(headsCount == 5) {
      resolve(`It took ${attempts} times to flip heads ${headsCount} times in a row.`)
    } 
    else {
      reject(`"Uh oh the coin has been flipped ${attempts} times. Aborting code."`);
    }
  });
}

fiveHeads()
  .then( res => console.log(res) )
  .catch( err => console.log(err) );
console.log( "This should run before heads is flipped 5 times" );
