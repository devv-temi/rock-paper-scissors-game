function quadraticEquation(a, b, c) {
    let d = b * b - 4 * a * c;
    let e = Math.sqrt(d);
    if (a == 0) {
        console.log("denominator Error")
    } 

    if (d > 0) {
        console.log((-b + e) / (2 * a) + " and " + (-b -e) / (2 * a))
    } else if (d == 0) {
        console.log((-b + e) / (2 * a) + " and " + (-b -e) / (2 * a))
    } else {
        console.log((-b + e) / (2 * a) + " and " + (-b -e) / (2 * a))
    }
}

let a = 0, b = 8, c = 4;

quadraticEquation(a, b, c)