//array.every()

Array.prototype.myevery = function (callbackfn){
  for (let i = 0; i < this.length; i++) {
    const currentelement = this[i];
    const response = callbackfn(currentelement ,i , this);
    if (!response) return false 
  }
  return true
}

function callbackfn(currentelement ,index , array){
  return currentelement < 40
}

const nums = [1, 30, 49, 29, 10, 13];

const res = nums.myevery(callbackfn)
console.log(res);