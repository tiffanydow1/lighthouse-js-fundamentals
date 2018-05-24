function loopyLighthouse(range, multiples, words) {
  for (var i = range[0,0]; i <= range[0,1]; i++) {
    if (i % multiples[1,0] === 0 && i % multiples[1,1] === 0) {
      console.log(words[2,0] + words[2,1]);
    }
    else if (i % multiples[1,0] === 0) {
      console.log(words[2,0]);
    }
    else if (i % multiples[1,1] === 0) {
      console.log(words[2,1]);
    }
    else {
      console.log(i);
    }
  }
}

loopyLighthouse([15,90], [2,5], ["Batty", "Beacon"]);