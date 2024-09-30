// You should implement your task here.

// module.exports = function towelSort(matrix) {
//     if (matrix === undefined) {
//         return [];
//     }
//     let result = [];
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (i === 0 || i % 2 === 0) {
//                 result.push(matrix[i][j]);
//             } else {
//                 result.push(matrix[i][matrix[i].length - 1 - j]);
//             }
//         }
//     }

//     return result;
// };

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    return matrix.flatMap((row, index) => {
        if (index % 2 !== 0) return row.reverse();
        return row;
    });
};
