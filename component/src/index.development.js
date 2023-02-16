import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Input } from './components/Input';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const InputExample = () => {
  const [value, setValue] = useState('');
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return <Input value={value} onChange={onChangeHandler} />;
};

root.render(<InputExample />);
