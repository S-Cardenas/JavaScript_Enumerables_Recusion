var uniq = function (arr) {

  var ret_arr = [];
  arr.forEach( function(el) {
    if (!ret_arr.includes(el)){
      ret_arr.push(el)
    }
  });

  return ret_arr
};


var twoSum = function(arr) {
  var positions = [];
  var i = 0;
  var result;

  arr.myEach(function(el) {
    if (i === arr.length - 1) {
      console.log(positions);
      result = positions
      return
    }

    var subArray = arr.slice(i + 1, arr.length);
    var j = i + 1;
    var pusher = function(el2) {
      if (el + el2 === 0) {
        positions.push([i, j])
      }
      j++;
    };

    subArray.myEach(pusher);
    i++;

  });

  return result

};

var twoSum = function(arr) {
  var positions = [];
  var i = 0;
  arr.myEach(function (el) {
    console.log(el)
    if (i === arr.length - 1) {
      console.log(positions)
      return positions;
    }
    var subArray = arr.slice(i + 1, arr.length);
    var j = i + 1;
    i++;

  })
};


Array.prototype.myTranspose = function() {

  var retArr = new Array(this[0].length);

  for (var i = 0; i < retArr.length; i++) {
    retArr[i] = [];
    for (var j = 0; j < this.length; j++){
      retArr[i].push(this[j][i]);
    }
  }

  return retArr;
};

Array.prototype.myEach = function(blck) {
  for(var i = 0; i < this.length; i++) {
    blck(this[i]);
  }
};

Array.prototype.myMap = function(block) {
  var retArr = [];
  this.myEach( function(el) {
    retArr.push(block(el));
  });
  debugger
  return retArr;
};

Array.prototype.myInject = function (callBack) {
  var accum = this[0];
  this.slice(1,this.length).myEach( function(el) {
    accum = callBack(accum, el);
  });
  return accum;
};

Array.prototype.myBubbleSort = function (callBack) {
  var condition = true;
  while(condition){
    condition = false;
    for(var i = 0; i < this.length-1; i++){
      if(callBack(this[i], this[i+1])){
        var tmp = this[i+1];
        this[i+1] = this[i];
        this[i] = tmp;
        condition = true;
      }
    }
  }
}

var subStrings = function(string){
  result = [];
  for(i=0; i < string.length; i++){
    for(j=i+1; j <= string.length; j++){
      result.push(string.slice(i, j));
    }
  }

  return result
}

var exponentiation = function(base, n){
  if (n === 0) {
    return 1
  }
  return base * exponentiation(base, n - 1)
}

var exponentiation2 = function(base, n) {
  if (n === 0) {
    return 1;
  }
  else if ( n === 1 ) {;
    return base;
  }
  else if (n % 2 === 0) {
    var tmp = exponentiation2(base, n / 2);
    return tmp * tmp;
  }
  else {
    var tmp = (exponentiation2(base, (n - 1) / 2));
    return base * tmp * tmp;
  }
}

var fibonacci = function(n) {
  if (n === 0) {
    return []
  }
  else if (n === 1){
    return [0]
  }
  else if (n === 2) {
    return [0, 1]
  }
  fib_num = fibonacci(n - 1);
  fib_num.push(fib_num[fib_num.length - 1] + fib_num[fib_num.length - 2])
  return fib_num
}

var bsearch = function(array, target){
  if (array.length === 0){
    return null
  }
  var middle_idx = array.length / 2;
  middle_idx = Math.floor(middle_idx)
  if(array[middle_idx] === target){
    return middle_idx
  }
  var left = array.slice(0, middle_idx);
  var right = array.slice(middle_idx + 1, array.length);
  debugger
  if (array[middle_idx] > target){
    return bsearch(left, target)
  }
  else{
    var right_result = bsearch(right, target);
    if (right_result != null){
      return middle_idx + 1 + right_result
    }
    return null
  }
}

var makeChange = function(value, coins) {
  if (value === 0) {
    return []
  }
  var best_result = [];

  for (var i=0; i < coins.length; i++) {

    if (coins[i] <= value) {
      remainder_result = makeChange(value - coins[i], coins.slice(i, coins.length));
      debugger
      remainder_result.push(coins[i]);

      if ( (best_result.length === 0)  || (remainder_result.length < best_result.length)){
        best_result = remainder_result;
      }
    }
  }
  return best_result
}

var Cat = function(name, owner) {
  this.name = name;
  this.owner = owner;
}


Cat.prototype.cuteStatement = function() {
      return this.owner + " loves " + this.name
}

var mergeSort = function(array) {
  if (array.length === 0){
    return array
  }
  if (array.length === 1){
    return array
  }
  //split
  var left = array.slice(0, Math.floor(array.length/2));
  var right = array.slice(Math.floor(array.length/2), array.length);
  //sort
  var sorted_left = mergeSort(left);
  var sorted_right = mergeSort(right);
  //merge
  return merge(sorted_left, sorted_right)
}

var merge = function(left, right){
  var merged_arr = [];
  while(left.length != 0 && right.length != 0){
    if(left[0] < right[0]){
      merged_arr.push(left.shift())
    }
    else{
      merged_arr.push(right.shift())
    }
  }
  return merged_arr.concat(left).concat(right)
}


var subSets = function(array) {
  if (array.length === 0) {
    return [[]]
  }
  var left = array.slice(0,array.length - 1);
  var left_results = subSets(left);
  var returnArray = [];
  left_results.forEach( function(el) {
    returnArray.push(el);
    tmp = el.slice(0)
    tmp.push(array[array.length - 1]);
    returnArray.push(tmp)
  })
  return returnArray
}

var Student = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
  this.enroll = function(course){
    if (!this.courses.includes(course)){
      this.courses.push(course)
    }
  }
  this.courseload = {};
}

var Course = function(name, department, numCredits){
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.students = [];
  this.addStudent = function(student){
    this.students.push(student);
    student.enroll(this);
  }
}
