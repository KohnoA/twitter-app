import { useState } from 'react';

import ReactLogo from './assets/react.svg';
import { TestContainer } from './App.styled';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev">
          React Logo
          <ReactLogo width={50} height={50} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <TestContainer />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
