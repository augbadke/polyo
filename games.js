const games = {

  '2024-04-04': {
    n: 1,        
    solution: [['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1']],      
    polyominos: [[['0', '1'], ['0', '1'], ['1', '1'], ['1', '0']], [['1', '1'], ['1', '0']], [['1'], ['1'], ['1']], [['1', '0'], ['1', '1'], ['1', '0']], [['1', '0'], ['1', '0'], ['1', '1'], ['0', '1']], [['1', '0'], ['1', '0'], ['1', '1']]]
  },

  '2024-04-05': {
    n: 2,
    solution: [['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['X', '1', '1', '1', '1']],      
    polyominos: [[['0', '1'], ['1', '1'], ['1', '0']], [['1', '1'], ['1', '0'], ['1', '0']], [['0', '0', '1'], ['0', '1', '1'], ['1', '1', '0']], [['1', '0'], ['1', '1'], ['1', '0']], [['1'], ['1'], ['1']], [['1', '1'], ['1', '0']]]
  },

  '2024-04-06': {
    n: 3,
    solution: [['X', '1', '1', 'X', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1']],      
    polyominos: [[['1', '1'], ['1', '0'], ['1', '1']], [['1', '0'], ['1', '1'], ['0', '1']], [['1', '0'], ['1', '1'], ['1', '0'], ['1', '0']], [['1', '1', '0'], ['0', '1', '0'], ['0', '1', '1']], [['1'], ['1'], ['1']]]
  },

  '2024-04-07': {
    n: 4,
    solution: [['X', '1', '1', 'X', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1']],      
    polyominos: [[['1', '0'], ['1', '1'], ['0', '1']], [['1'], ['1'], ['1']], [['0', '1'], ['0', '1'], ['1', '1'], ['1', '0']], [['1', '1'], ['1', '0']], [['1', '1'], ['1', '0'], ['1', '0']], [['1', '0'], ['1', '1'], ['1', '0']]]
  },

  '2024-04-08': {
    n: 5,
    solution: [['X', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1']],      
    polyominos: [[['0', '1', '1'], ['0', '1', '0'], ['1', '1', '0']], [['1', '1'], ['1', '0'], ['1', '0']], [['1'], ['1'], ['1'], ['1']], [['1', '0'], ['1', '0'], ['1', '1']], [['1'], ['1'], ['1']], [['1', '1'], ['1', '0']]]
  },

  '2024-04-09': {
    n: 6,
    solution: [['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1']],      
    polyominos: [[['0', '1', '1'], ['0', '1', '0'], ['1', '1', '0']], [['1', '0'], ['1', '0'], ['1', '1']], [['1'], ['1'], ['1'], ['1']], [['1'], ['1'], ['1']], [['1', '1'], ['1', '0']], [['1', '1'], ['1', '0'], ['1', '0']]]
  },

  '2024-04-10': {
    n: 7,
    solution: [['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1']],      
    polyominos: [[['1', '1'], ['1', '0'], ['1', '0']], [['1', '1'], ['1', '1']], [['1', '1'], ['1', '0']], [['1', '1', '0'], ['0', '1', '0'], ['0', '1', '1']], [['1'], ['1'], ['1']], [['1', '0'], ['1', '0'], ['1', '1'], ['0', '1']]]
  },

  '2024-04-11': {
    n: 8,
    solution: [['X', '1', '1', 'X', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1']],      
    polyominos: [[['0', '0', '1'], ['0', '1', '1'], ['1', '1', '0']], [['1'], ['1'], ['1']], [['1', '1'], ['1', '0']], [['1', '0'], ['1', '1'], ['1', '0']], [['0', '1'], ['1', '1'], ['1', '0']], [['1', '1'], ['1', '1']]]
  },
  
  '2024-04-12': {
    n: 9,
    solution: [['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '1', '1', '1', '1']],      
    polyominos: [[['1'], ['1'], ['1']], [['1', '0'], ['1', '0'], ['1', '1']], [['1', '1'], ['1', '0']], [['1', '0'], ['1', '0'], ['1', '1'], ['0', '1']], [['0', '0', '1'], ['0', '1', '1'], ['1', '1', '0']], [['1', '0'], ['1', '1'], ['0', '1']]]
  },

  '2024-04-13': {
    n: 10,
    solution: [["1", "1", "X", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"]],      
    polyominos: [[["1"], ["1"], ["1"], ["1"]], [["1"], ["1"], ["1"]], [["1", "1"], ["1", "1"]], [["1", "0"], ["1", "1"], ["1", "0"]], [["1", "1"], ["1", "0"], ["1", "0"]], [["1", "0"], ["1", "1"], ["1", "0"], ["1", "0"]]],
    colors: [3, 1, 9, 10, 0,2]
  },

  '2024-04-14': {
    n: 11,
    solution: [['1', '1', '1', 'X', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['X', '1', '1', '1', '1']],      
    polyominos: [[['1', '0'], ['1', '1'], ['1', '0'], ['1', '0']], [['1', '0'], ['1', '0'], ['1', '1']], [['1', '1'], ['1', '0'], ['1', '0']], [['1', '1', '0'], ['0', '1', '0'], ['0', '1', '1']], [['1', '1'], ['1', '1']]],
    colors: [3, 1, 9, 10, 0]
  },

}