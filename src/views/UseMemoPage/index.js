import React, { useState, useMemo } from "react";

// 暗号：马德拉群岛
export default function UseMemoPage(props) {
  const [count, setCount] = useState(0);

  // 这里使用useMemo
  const expensive = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
    // 只有count变化，这⾥才重新执⾏
  }, [count]);

  const [value, setValue] = useState('');

  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>expensive:{expensive}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
    </div>
  );
}