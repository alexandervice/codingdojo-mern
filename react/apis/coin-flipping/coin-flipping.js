function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  

function fiveHeads() {
  let attempts = 0;
  let headsCount = 0;
  return new Promise( (resolve, reject) => {
    attempts++;
    let result = tossCoin();
    console.log(`${result} was flipped`)
    result === "heads" ? headsCount++ : headsCount += 0;
    if(headsCount > 5) {
      resolve(`It took ${attempts} to flip heads 5 times.`)
    } else {
      reject("Flipping the coin again");
    }
  });
}

fiveHeads()
  .then( res => console.log(res) )
  .catch( err => console.log(err) );
console.log( "This should run before heads is flipped 5 times" );
