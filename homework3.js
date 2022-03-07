// Q1 Function This

function max(iterable, key) {
    var maximum = 0;
    for (var elem in iterable) {
      var el = key(elem);
      if (el >= key(maximum)) {
        maximum = elem;
      }
    }
    return maximum;
  }

  //Q2 
  const reverser = function(input) {
    return 1/input;
  };


// Q4 Objects Gworl

function changer(object, key, value) {
    var prev = key;
    if (Array.isArray(prev)) {
      prev.push(value);
    } else if (typeof prev == 'object' && prev != null) {
      Object = JSON.stringify({key: key, value: value});
    } else {
      key = value;
    }
    return null;
  }

// Q5

async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1);
        resolve("yay!");
    })
    console.log(2);
    console.log(3);
    console.log(4);
    const five = new Promise((resolve, reject) => {
      resolve(5)
      reject("... reject.")
  })
    console.log(five);
    return five;
}