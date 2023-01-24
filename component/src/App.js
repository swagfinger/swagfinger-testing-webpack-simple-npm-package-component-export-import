import React, { useState } from 'react';
import { Input } from './components/Input';

const App = () => {
  const [value, setValue] = useState('');
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return <Input value={value} onChange={onChangeHandler} />;
};

export default App;
