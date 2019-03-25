class MySet {
  constructor(valueArray){
    this._set1 = valueArray;
    }
    addNumber(){
      this._set1.push();
    }
    removeNumber(){
      this._set1.remove();
    }
}
let my_set = new MySet([1, 2, 3, 4]);
let my_set2 = new MySet([5, 6, 7, 8]);
let final_set = new MySet();
final_set.addNumber('9');
final_set.removeNumber('4');

function test_set(final_set, newValue){
  for(let i = 0; i<= final_set.length; i++){
    if(final_set[i] == newValue){
      return final_set;
    }
  }
  final_set.push(newValue);
  return final_set;
  }

function test_set2(final_set, newValue){
  if(newValue = (test_set2.push(final_set[i]), [1, 2, 3, 4])){
  for(let i = 0; i <= new_set.length; i++);
    if(new_set == final_set[i]){
    return new_set.remove(final_set[i]);
}else{
  return new_set.push(final_set[i]);
    }
  }
}
