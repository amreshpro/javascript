
const Colors = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue'
  };
  
  console.log(Colors.RED); // Outputs: 'red'
  

//   To make the enum immutable, you can use Object.freeze().
const Colors2 = Object.freeze({
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue'
  });
  
  console.log(Colors2.RED); // Outputs: 'red'
  
  // Trying to modify will have no effect
  Colors2.RED = 'yellow';
  console.log(Colors2.RED); // Still outputs: 'red'
  

  const Directions = Object.freeze({
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
  });
  
  console.log(Directions.UP);   // Outputs: 1
  console.log(Directions.DOWN); // Outputs: 2
  

  const Colors3 = new Map([
    ['RED', '#FF0000'],
    ['GREEN', '#00FF00'],
    ['BLUE', '#0000FF']
  ]);
  
  console.log(Colors3.get('RED')); // Outputs: '#FF0000'
  

//   Enum-Like Class (More Advanced)
// For more complex enums with methods, you can define an enum-like class.
class Colors4 {
    static RED = new Colors4('red');
    static GREEN = new Colors4('green');
    static BLUE = new Colors4('blue');
  
    constructor(name) {
      this.name = name;
    }
  
    toString() {
      return this.name;
    }
  }
  
  console.log(Colors4.RED.toString()); // Outputs: 'red'
  console.log(Colors4.GREEN);          // Outputs: Colors { name: 'green' }
  