function groupBy(accSub, valSub, ageRange) {
  if (typeof accSub[ageRange] === "undefined") {
    accSub[ageRange] = [];
  }
  accSub[ageRange].push(valSub);
  return accSub;
}

function ageFilter(acc, val) {
  switch (true) { // not sure how to do this with a .filter()
    case val.age < 18: {
      break;
    }
    case val.age < 21: {
      acc = groupBy(acc, val, `20 and younger`);
      break;
    }
    case val.age < 31: {
      acc = groupBy(acc, val, `21-30`);
      break;
    }
    case val.age < 41: {
      acc = groupBy(acc, val, `31-40`);
      break;
    }
    case val.age < 51: {
      acc = groupBy(acc, val, `41-50`);
      break;
    }
    default: {
      acc = groupBy(acc, val, `51 and older`);
      break;
    }
  }
  return acc;
}

function groupAdultsByAgeRange(input) {
  return input.reduce(ageFilter, {});
}

module.exports = { groupAdultsByAgeRange: groupAdultsByAgeRange };
