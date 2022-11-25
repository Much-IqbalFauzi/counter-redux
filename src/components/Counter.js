import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counterSlice';
import styles from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state=> state.counter.value)
  const showCounter = useSelector(state => state.counter.showCounter)
  
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseFive = () => {
    dispatch(counterActions.increase(5))
  }
  
  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={styles.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseFive}>Increase 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
