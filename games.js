const games = {

  '2024-04-29': {
    n: 18,
    solution: [['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1']],      
    polyominos: [[['0', '1'], ['1', '1'], ['0', '1'], ['0', '1']], [['1', '0'], ['1', '1'], ['1', '0'], ['1', '0']], [['1', '1'], ['1', '1']], [['1'], ['1'], ['1']], [['0', '1', '1'], ['0', '1', '0'], ['1', '1', '0']]],
    var: [[[1, 2, 2, 3, 4], [4, 3, 4, 4, 4]], [[0, 1, 1, 1, 1], [1, 0, 1, 2, 3]], [[3, 3, 4, 4], [2, 3, 2, 3]], [[0, 0, 0], [2, 3, 4]], [[2, 2, 3, 4, 4], [1, 2, 1, 0, 1]]]},

  '2024-04-30': {
    n: 19,
    solution: [['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1']],      
    polyominos: [[['1', '0'], ['1', '1'], ['0', '1']], [['1', '1'], ['1', '0'], ['1', '0']], [['1', '0'], ['1', '1'], ['1', '0']], [['1', '1'], ['1', '0']], [['1', '0'], ['1', '1'], ['1', '0'], ['1', '0']], [['1', '0'], ['1', '0'], ['1', '1']]],
    var: [[[2, 3, 3, 4], [2, 2, 3, 3]], [[0, 0, 0, 1], [2, 3, 4, 4]], [[3, 4, 4, 4], [1, 0, 1, 2]], [[2, 2, 3], [0, 1, 0]], [[0, 1, 1, 1, 1], [1, 0, 1, 2, 3]], [[2, 2, 3, 4], [3, 4, 4, 4]]]},

  '2024-05-01': {
    n: 20,
    solution: [['1', '1', '1', '1', 'X'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', 'X'], ['1', '1', '1', '1', 'X']],
    polyominos: [[['1', '0'], ['1', '1'], ['1', '0'], ['1', '0']], [['0', '1'], ['1', '1'], ['1', '0']], [['1', '1'], ['1', '1']], [['1', '1'], ['1', '0'], ['1', '1']], [['1', '0'], ['1', '1'], ['0', '1']]],
    var: [[[3, 4, 4, 4, 4], [1, 0, 1, 2, 3]], [[1, 2, 2, 3], [1, 0, 1, 0]], [[2, 2, 3, 3], [2, 3, 2, 3]], [[0, 0, 0, 1, 1], [0, 1, 2, 0, 2]], [[0, 1, 1, 2], [3, 3, 4, 4]]]},
  
  '2024-05-02': {
    n: 21,
    solution: [['X', '1', 'X', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1']],
    polyominos: [[['1', '0'], ['1', '1'], ['1', '0'], ['1', '0']], [['1', '0'], ['1', '1'], ['1', '0']], [['0', '1'], ['0', '1'], ['1', '1'], ['1', '0']], [['1', '1'], ['1', '0'], ['1', '0']], [['0', '1'], ['1', '1'], ['1', '0']]],
    var: [[[0, 1, 2, 2, 3], [4, 4, 3, 4, 4]], [[3, 4, 4, 4], [3, 2, 3, 4]], [[0, 1, 1, 2, 3], [3, 2, 3, 2, 2]], [[2, 3, 4, 4], [1, 1, 0, 1]], [[0, 1, 1, 2], [1, 0, 1, 0]]]},
  
  '2024-05-03': {
    n: 22,
    solution: [['1', '1', '1', '1', '1'], ['1', '1', '1', '1', 'X'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', 'X', '1', '1', '1']],
    polyominos: [[['1', '0'], ['1', '0'], ['1', '1']], [['0', '1', '1'], ['1', '1', '0'], ['0', '1', '0']], [['0', '1', '1'], ['0', '1', '0'], ['1', '1', '0']], [['0', '1'], ['1', '1'], ['1', '0']], [['1'], ['1'], ['1'], ['1']]],
    var: [[[3, 4, 4, 4], [4, 2, 3, 4]], [[1, 2, 2, 3, 3], [3, 3, 4, 2, 3]], [[0, 1, 1, 1, 2], [0, 0, 1, 2, 2]], [[2, 3, 3, 4], [1, 0, 1, 0]], [[0, 0, 0, 0], [1, 2, 3, 4]]]},  
  
  '2024-05-04': {
    n: 23,
    solution: [['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', 'X'], ['1', '1', '1', '1', '1'], ['1', '1', 'X', 'X', '1']],
    polyominos: [[['0', '1'], ['0', '1'], ['1', '1'], ['1', '0']], [['1', '0'], ['1', '1'], ['0', '1']], [['1', '1'], ['1', '1']], [['1', '1'], ['1', '0'], ['1', '0']], [['0', '1', '1'], ['0', '1', '0'], ['1', '1', '0']]],
    var: [[[0, 0, 1, 1, 1], [0, 1, 1, 2, 3]], [[2, 3, 3, 4], [3, 3, 4, 4]], [[3, 3, 4, 4], [0, 1, 0, 1]], [[0, 0, 0, 1], [2, 3, 4, 4]], [[1, 2, 2, 2, 3], [0, 0, 1, 2, 2]]]},  
  
  '2024-05-05': {
    n: 24,
    solution: [['1', '1', '1', '1', '1'], ['1', '1', '1', '1', 'X'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', 'X'], ['1', 'X', '1', '1', '1']],
    polyominos: [[['1', '0'], ['1', '1'], ['1', '0'], ['1', '0']], [['1', '0'], ['1', '1'], ['0', '1']], [['1', '1'], ['1', '0'], ['1', '0']], [['0', '1', '1'], ['1', '1', '0'], ['0', '1', '0']], [['1', '0'], ['1', '1'], ['1', '0']]],
    var: [[[0, 0, 0, 0, 1], [1, 2, 3, 4, 3]], [[0, 1, 1, 2], [0, 0, 1, 1]], [[3, 4, 4, 4], [2, 2, 3, 4]], [[1, 2, 2, 2, 3], [2, 2, 3, 4, 3]], [[2, 3, 3, 4], [0, 0, 1, 0]]]},
  
  '2024-05-06': {
    n: 25,
    solution: [['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', 'X']],
    polyominos: [[['0', '1'], ['1', '1'], ['1', '0']], [['0', '1'], ['1', '1'], ['0', '1'], ['0', '1']], [['1', '0'], ['1', '1'], ['1', '0'], ['1', '0']], [['1', '0'], ['1', '0'], ['1', '1']], [['1', '1'], ['1', '0'], ['1', '0']]],
    var: [[[2, 3, 3, 4], [4, 3, 4, 3]], [[2, 2, 2, 2, 3], [0, 1, 2, 3, 1]], [[0, 1, 1, 1, 1], [1, 0, 1, 2, 3]], [[3, 4, 4, 4], [2, 0, 1, 2]], [[0, 0, 0, 1], [2, 3, 4, 4]]]},
  
  '2024-05-07': {
    n: 26,
    solution: [['1', '1', '1', '1', 'X'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', 'X'], ['1', '1', '1', '1', '1']],
    polyominos: [[['0', '0', '1'], ['0', '1', '1'], ['1', '1', '0']], [['0', '1', '1'], ['1', '1', '0'], ['0', '1', '0']], [['1', '1'], ['1', '0'], ['1', '0']], [['1', '1', '0'], ['0', '1', '1'], ['0', '1', '0']], [['0', '1'], ['1', '1'], ['1', '0']]],
    var: [[[0, 0, 1, 1, 2], [2, 3, 3, 4, 4]], [[1, 2, 2, 2, 3], [0, 0, 1, 2, 1]], [[3, 4, 4, 4], [0, 0, 1, 2]], [[2, 3, 3, 4, 4], [3, 2, 3, 3, 4]], [[0, 0, 1, 1], [0, 1, 1, 2]]]},  
  
  '2024-05-08': {
    n: 27,
    solution: [['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', 'X'], ['1', '1', '1', '1', 'X']],
    polyominos: [[['0', '0', '1'], ['0', '1', '1'], ['1', '1', '0']], [['0', '1'], ['0', '1'], ['1', '1'], ['1', '0']], [['1', '0'], ['1', '1'], ['1', '0']], [['1'], ['1'], ['1'], ['1']], [['1', '1'], ['1', '0'], ['1', '0']]],
    var: [[[1, 2, 2, 3, 3], [0, 0, 1, 1, 2]], [[0, 0, 1, 1, 1], [0, 1, 1, 2, 3]], [[2, 2, 2, 3], [2, 3, 4, 3]], [[4, 4, 4, 4], [0, 1, 2, 3]], [[0, 0, 0, 1], [2, 3, 4, 4]]]},  
  
 '2024-05-09': {
    n: 28,
    solution: [['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', 'X', '1', '1', '1']],
    polyominos: [[['1', '0'], ['1', '0'], ['1', '1']], [['1', '1'], ['1', '0'], ['1', '1']], [['1'], ['1'], ['1'], ['1']], [['1', '0'], ['1', '1'], ['1', '0']], [['0', '1', '0'], ['1', '1', '1'], ['0', '1', '0']]],
    var: [[[0, 0, 1, 2], [2, 3, 3, 3]], [[2, 2, 3, 3, 3], [0, 2, 0, 1, 2]], [[0, 1, 2, 3], [4, 4, 4, 4]], [[3, 4, 4, 4], [3, 2, 3, 4]], [[0, 1, 1, 1, 2], [1, 0, 1, 2, 1]]]},
  
  '2024-05-10': {
    n: 29,
    solution: [['1', 'X', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', 'X', '1']],
    polyominos: [[['0', '1'], ['1', '1'], ['1', '0']], [['1', '1'], ['1', '0'], ['1', '1']], [['1', '1'], ['1', '1']], [['0', '0', '1'], ['0', '1', '1'], ['1', '1', '0']], [['1', '0'], ['1', '0'], ['1', '1']]],
    var: [[[2, 2, 3, 3], [1, 2, 2, 3]], [[0, 0, 1, 1, 1], [0, 2, 0, 1, 2]], [[0, 0, 1, 1], [3, 4, 3, 4]], [[2, 3, 3, 4, 4], [0, 0, 1, 1, 2]], [[2, 2, 3, 4], [3, 4, 4, 4]]]},  
  
  '2024-05-11': {
    n: 30,
    solution: [['1', 'X', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', 'X', '1', 'X']],
    polyominos: [[['0', '1', '0'], ['1', '1', '1'], ['0', '1', '0']], [['1', '0'], ['1', '1'], ['1', '0']], [['1'], ['1'], ['1'], ['1']], [['1', '1'], ['1', '0'], ['1', '0']], [['0', '1', '1'], ['1', '1', '0'], ['0', '1', '0']]],
    var: [[[2, 3, 3, 3, 4], [3, 2, 3, 4, 3]], [[0, 1, 1, 2], [4, 3, 4, 4]], [[0, 1, 2, 3], [0, 0, 0, 0]], [[2, 3, 4, 4], [1, 1, 0, 1]], [[0, 0, 1, 1, 2], [2, 3, 1, 2, 2]]]},
  
  '2024-05-12': {
    n: 31,
    solution: [['1', '1', '1', 'X', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', 'X'], ['1', '1', '1', '1', 'X']],
    polyominos: [[['1', '0'], ['1', '0'], ['1', '1']], [['1', '1'], ['1', '0'], ['1', '0']], [['1', '1'], ['1', '1']], [['1', '0'], ['1', '0'], ['1', '1'], ['0', '1']], [['1', '1', '0'], ['0', '1', '1'], ['0', '1', '0']]],
    var: [[[2, 3, 4, 4], [0, 0, 0, 1]], [[0, 1, 2, 2], [4, 4, 3, 4]], [[3, 3, 4, 4], [2, 3, 2, 3]], [[0, 1, 1, 2, 3], [0, 0, 1, 1, 1]], [[0, 0, 1, 1, 2], [1, 2, 2, 3, 2]]]},
  
  '2024-05-13': {
    n: 32,
    solution: [['X', '1', '1', '1', 'X'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1']],
    polyominos: [[['0', '1', '0'], ['1', '1', '1'], ['0', '1', '0']], [['1', '0'], ['1', '0'], ['1', '1']], [['0', '1'], ['1', '1'], ['0', '1'], ['0', '1']], [['1'], ['1'], ['1'], ['1']], [['0', '1'], ['1', '1'], ['1', '0']]],
    var: [[[0, 1, 1, 1, 2], [1, 0, 1, 2, 1]], [[2, 2, 3, 4], [3, 4, 4, 4]], [[2, 3, 3, 3, 3], [2, 0, 1, 2, 3]], [[4, 4, 4, 4], [0, 1, 2, 3]], [[0, 0, 1, 1], [2, 3, 3, 4]]]},

  '2024-05-14': {
    n: 33,
    solution: [['1', 'X', '1', '1', 'X'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', 'X', '1', '1', '1']],
    polyominos: [[['1', '1'], ['1', '0'], ['1', '0']], [['1', '0'], ['1', '1'], ['1', '0'], ['1', '0']], [['1', '0'], ['1', '0'], ['1', '1']], [['1', '0'], ['1', '1'], ['1', '0']], [['1', '1'], ['1', '0'], ['1', '1']]],
    var: [[[2, 3, 4, 4], [4, 4, 3, 4]], [[0, 1, 1, 2, 3], [3, 3, 4, 3, 3]], [[0, 1, 2, 2], [0, 0, 0, 1]], [[0, 1, 1, 2], [2, 1, 2, 2]], [[3, 3, 3, 4, 4], [0, 1, 2, 0, 2]]]},  
  
  '2024-05-15': {
    n: 34,
    solution: [['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['X', '1', '1', '1', 'X']],
    polyominos: [[['1'], ['1'], ['1'], ['1']], [['1', '0'], ['1', '1'], ['1', '0']], [['1', '1', '0'], ['0', '1', '0'], ['0', '1', '1']], [['1', '0'], ['1', '0'], ['1', '1']], [['0', '1', '1'], ['0', '1', '0'], ['1', '1', '0']]],
    var: [[[0, 0, 0, 0], [1, 2, 3, 4]], [[2, 3, 3, 4], [3, 2, 3, 3]], [[2, 2, 3, 4, 4], [0, 1, 1, 1, 2]], [[1, 1, 2, 3], [3, 4, 4, 4]], [[0, 1, 1, 1, 2], [0, 0, 1, 2, 2]]]},  
  
  '2024-05-16': {
    n: 35,
    solution: [['1', '1', 'X', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', 'X']],
    polyominos: [[['1', '1'], ['1', '0'], ['1', '0']], [['0', '1'], ['1', '1'], ['0', '1'], ['0', '1']], [['1', '1'], ['1', '1']], [['1', '0'], ['1', '0'], ['1', '1']], [['1'], ['1'], ['1'], ['1']]],
    var: [[[2, 3, 4, 4], [1, 1, 0, 1]], [[0, 1, 1, 2, 3], [3, 2, 3, 3, 3]], [[0, 0, 1, 1], [0, 1, 0, 1]], [[2, 3, 4, 4], [2, 2, 2, 3]], [[0, 1, 2, 3], [4, 4, 4, 4]]]},
}