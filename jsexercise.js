for (i=1; i<26 ; i++){
  if(i % 2 === 0) {
    console.log(i + " Even")
  } else {
    console.log(i + " Odd")
  }


}

for(i = 1;i < 51;i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  }
  else if (i % 3 === 0) {
    console.log("buzz");

  }
  else if (i % 5 === 0) {
    console.log("buzz")
  }
    else {
      console.log(i);

    }
}
    var sum = 0
    for(i = 1; i < 1000; i++){
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
            console.log(sum);                   }
                             }

  for( i = 1,i < 8, i++) {
    if(i === 7) {
      console.log('#######');
    }
      else if(i === 6) {
        console.log('######');
      }
      else if(i===5) {
        console.log('#####');
      }
      else if (i===4) {
        console.log('####');
      }
      else if (i === 3) {
        console.log('###');
      }
      else if (i === 2) {
        console.log('##');
      }
      else {
        console.log("#");
      }

      }
