export const addNumber = (...numbers) => {
    let sum = 0;
    return numbers.map((item) => (sum += item));
};