export const calculateArea = ({ radius, power = 2 }) => {
    const phi = 3.14;
    return phi * Math.pow(radius, power);
};