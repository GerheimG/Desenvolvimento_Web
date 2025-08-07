function mutiplicar(x) {
    return y => x * y
    }

const dobro = mutiplicar(2);
const triplo = mutiplicar(3);

console.log(dobro(5));
console.log(triplo(5));