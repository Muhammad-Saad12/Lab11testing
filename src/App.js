import './App.css';
import Task3 from './task3';


function App() {

  return (
    // This div contains task 1 and 2
    <div data-testid='comp' className='App'>
    <h1>Task 1 and 2</h1>
      <h1>Hello World</h1>
       {/* this component contains task 3 */}
      <Task3/>
    </div>
  );
}

export default App;
