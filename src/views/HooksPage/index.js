import React, { useState } from 'react';

function HooksPage() {
  const [count, setCount] = useState(0);

  console.log(count);
  console.log(setCount);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default HooksPage;