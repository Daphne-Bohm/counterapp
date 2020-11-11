import React, {useState} from 'react';
import Counter from './Counter';

function App(){

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  }

  return(
    <div className="app">
      <Counter numClicked={count} inc={increment}/>
    </div>
  )

}



export default App;