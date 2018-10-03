function mix(s1, s2) {
  // your code
  const charArr = [];
  let a = "a".charCodeAt(0);
  let z = "z".charCodeAt(0);
  for (; a < z + 1; ++a) {
    charArr.push(String.fromCharCode(a));
  }
  let s1Obj = validObj(charArr, s1);
  let s2Obj = validObj(charArr, s2);
  const combined = combineObjMax(s1Obj, s2Obj);
  const keys = Object.keys(combined).sort();
  keys.sort((key1, key2) =>
    (parseInt(combined[key2][0].split(":")[1]) - parseInt(combined[key1][0].split(":")[1])) ||
    (combined[key1][0].split(":")[0].charCodeAt(0) - combined[key2][0].split(":")[0].charCodeAt(0)) ||
    (key1.charCodeAt(0) - key2.charCodeAt(0))
    
  );

  let ans = keys.map( key => {

    let val = combined[key][0].split(":");
    let sNum = val[0];
    let count = val[1];
    let letterCount = "";
    for (let i = 0; i < count; i++){
      letterCount = letterCount + key;
    }
    if ( sNum === "both" ) {
      sNum = "=";
    }
    return `${sNum}:${letterCount}`;
  });
  return ans.join("/");
}

function validObj(charArr, string) {
  let chars = string.split("").filter(el => charArr.includes(el));
  const obj = {};
  for (let i = 0; i < chars.length; i++ ) {
    if ( !obj[chars[i]] ) {
      obj[chars[i]] = 1;
    } else {
      obj[chars[i]] += 1;
    }
  }
  return obj;
}

function combineObjMax(obj1, obj2) {
  const max = {};
  Object.keys(obj1).forEach(key => {
    if ( obj1[key] !== 1) {
      max[key] = [`1:${obj1[key]}`];
    } else {}
  });
  Object.keys(obj2).forEach(key => {
    if ( !max[key] && obj2[key] !== 1 ) {
      max[key] = [`2:${obj2[key]}`];
    } else if ( max[key] && obj2[key] !== 1 ){
      console.log(max[key][0].split(":")[1]);
      const maxVal = parseInt(max[key][0].split(":")[1]);
      const obj2Val = parseInt(obj2[key]);
      if ( maxVal < obj2Val ) {
        max[key] = [`2:${obj2[key]}`];
      } else if ( maxVal === obj2Val ) {
        max[key] = [`both:${maxVal}`];
      } else {}
    }
  });
  return max;
}
