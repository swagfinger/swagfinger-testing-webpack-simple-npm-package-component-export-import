import { useState } from 'react';

import { Input } from 'swagfinger-component';

function App() {
  const [myvalue, setValue] = useState('');
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className='App'>
      <Input value={myvalue} onChange={onChangeHandler} />
    </div>
  );
}

export default App;
