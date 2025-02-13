import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          {`count is ${count}`}
        </button>
        <div>
          Edit <code>src/App.tsx</code> and save to test HMR
        </div>
      </div>
      <div className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </div>
    </div>
  );
}

export default Counter;
