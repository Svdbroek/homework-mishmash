function someCoolFunction(acc, val, idx, arr) {
    // console.log (acc + 'acc')
    // console.log(val + 'val')
    // console.log(typeof acc[`20 and younger`])
    switch (true) {
        case val.age < 18: { break }
        case val.age < 21: {
            if (typeof acc[`20 and younger`] === "undefined") {
                acc[`20 and younger`] = [];
            }
            acc[`20 and younger`].push(val);
            break
        }
        case val.age < 31: {
            if (typeof acc[`21-30`] === "undefined") {
                acc[`21-30`] = [];
            }
            acc[`21-30`].push(val);
            break

        }
        case val.age < 41: {
            if (typeof acc[`31-40`] === "undefined") {
                acc[`31-40`] = [];
            }
            acc[`31-40`].push(val);
            break

        }
        case val.age < 51: {
            if (typeof acc[`41-50`] === "undefined") {
                acc[`41-50`] = [];
            }
            acc[`41-50`].push(val);
            break

        }
        default: {
            if (typeof acc[`51 and older`] === "undefined") {
                acc[`51 and older`] = [];
            }
            acc[`51 and older`].push(val);
        }
    }
    // console.log(acc)
    return acc;
}

function groupAdultsByAgeRange(input) {
    return input.reduce(someCoolFunction, {});
}

// console.log(groupAdultsByAgeRange([
//       { name: "pete", age: 10 },
//       { name: "dove", age: 17 },
//       { name: "dave", age: 18 },
//       { name: "hall", age: 19 },
//       { name: "donn", age: 20 },
//       { name: "trey", age: 21 },
//       { name: "hann", age: 29 },
//       { name: "chew", age: 30 },
//       { name: "cloe", age: 31 },
//       { name: "dart", age: 39 },
//       { name: "this", age: 40 },
//       { name: "dame", age: 41 },
//       { name: "henk", age: 49 },
//       { name: "anna", age: 50 },
//       { name: "olga", age: 51 },
//       { name: "bert", age: 52 },
//       { name: "oldd", age: 120 },
//     ]))

module.exports = { groupAdultsByAgeRange: groupAdultsByAgeRange };
