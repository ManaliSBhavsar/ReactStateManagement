import { useEffect } from 'react';
import './App.css'
import { useCounterStore } from './store'

//even access outside of component
const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count",count);
}

const App = () => {
  const count = useCounterStore((state) => state.count)
  //get updated value in App component
  return <OtherComponent count ={count} />;
}

const OtherComponent = ({count} :{count:number}) => {
  //update count in OtherComponent
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  useEffect(() => {
    logCount();
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
