function compare(a, b) {
    let sum = 0;
    if (a > b) {
        alert(a + " lon hon " + b);
    } else if (a <= b) {
        sum = a + b;
        return sum;
    }
}
let a = +prompt("nhap so thu 1");
let b = +prompt("nhap so thu 2");
document.write(compare(a,b));