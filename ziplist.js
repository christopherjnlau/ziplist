function zipList(array1, array2) {
  if (array1.length !== array2.length) {
    return 'Please put in  two lists of equal length!';
  }
  const array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i]);
    array3.push(array2[i]);
  }
  return array3;
}

const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

console.log(zipList(test1, test2));

function zipListTheSimpleWay(array1, array2) {
  const a = _.zip(array1, array2);
  return _.flatten(a, true);
}

console.log(zipListTheSimpleWay(test1, test2));
