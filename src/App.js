import React from 'react';
import Player from './components/Player';
import GetKey from './System/Getkey';

function App() {

  let phase = {
    left: 0,
    right: 0,
    up: 0,
    down: 0,
  };

  let posi = {
    x: 1,
    y: 2,
  }

  GetKey((e) => {
    const direction = e.key.replace("Arrow", "").toLowerCase();
    console.log(direction);
    console.log(phase.left);

    if (direction === "left") {
      phase.right = 0;
      phase.up = 0;
      phase.down = 0;
      let temp = true;
      if (phase.left === 2) {
        phase.left = 0;
        temp = false
      }
      if (temp === true)
        phase.left += 1;
      posi.x = phase.left;
      posi.y = 2;
    }
    console.log(posi);
  });

  return (
    <div className="App">
      <Player xx={posi.x} yy={posi.y} />
    </div>
  );

}



export default App;
