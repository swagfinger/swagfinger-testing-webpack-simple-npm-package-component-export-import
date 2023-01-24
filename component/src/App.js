import React, { useState } from 'react';
import { Input } from './components/Input';

const App = () => {
  const [value, setValue] = useState('');
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Input value={value} onChange={onChangeHandler} />
    </>
  );
};

export default App;
