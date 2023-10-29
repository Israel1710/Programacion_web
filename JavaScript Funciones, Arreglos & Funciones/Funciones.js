//  1.- Función power
function power(base, exponent) {
    if (exponent === 0) {
        return 1; // Cualquier número elevado a la potencia 0 es 1
    }
    else if (exponent < 0) {
        return 1 / power(base, -exponent); // Manejo de exponentes negativos
    } 
    else {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }
}
// Ejemplo de uso:
console.log(power(2, 3)); // Debe devolver 8
console.log(power(5, -2)); // Debe devolver 0.04


//  2.-Función getLargerInt
function getLargerInt(number1, number2) {
    return Math.max(number1, number2);
}
// Ejemplo de uso:
console.log(getLargerInt(7, 12)); // Debe devolver 12


//  3.-Función fibonacciSequence
function fibonacciSequence(limit) {
    if (limit <= 0) {
        return [];
    } 
    else if (limit === 1) {
        return [1];
    } 
    else if (limit === 2) {
        return [1, 1];
    } 
    else {
        const sequence = [1, 1];
        for (let i = 2; i < limit; i++) {
            const nextValue = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextValue);
        }
        return sequence;
    }
}
// Ejemplo de uso:
console.log(fibonacciSequence(15)); // Debe devolver [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//  4.-Función calculateAverage
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Evitar división por cero
    }
    const sum = numbers.reduce((total, number) => total + number, 0);
    return sum / numbers.length;
}
// Ejemplo de uso:
console.log(calculateAverage([4, 7, 2, 9, 5])); // Debe devolver 5.4