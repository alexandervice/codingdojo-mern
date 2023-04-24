function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  

function fiveHeads() {
  return new Promise( (resolve, reject) => {
    let attempts = 0;
    let headsCount = 0;
    while(headsCount < 5) {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`)
      result === heads ? headsCount++ : headsCount += 0;
      headsCount
    }
  });
}

fiveHeads()
  .then( res => console.log(res) )
  .catch( err => console.log(err) );
console.log( "When does this run now?" );
