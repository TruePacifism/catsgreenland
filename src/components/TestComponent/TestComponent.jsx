import { useEffect, useState } from 'react';

export default function TestComponent() {
  const [stateValue, setStateValue] = useState({
    inputValue: 'init',
    selectValue: 'init',
  });
  const changeStateValueField = (value, key) => {
    // setStateValue(prevStateValue => {
    //   console.log('Состояние до:', prevStateValue);
    //   const newStateValue = {
    //     ...prevStateValue,
    //     [key]: value,
    //   };
    //   console.log('Состояние после:', newStateValue);
    //   return newStateValue;
    // });
    console.log('Состояние до:', stateValue);
    let newStateValue = stateValue;
    newStateValue[key] = value;
    setStateValue(newStateValue);
    console.log('Состояние после:', stateValue);
  };
  useEffect(() => {
    console.log(
      `Состояние было изменено!
        Текущее состояние:`,
      stateValue
    );
  }, [stateValue]);
  return (
    <>
      <input
        type="text"
        onChange={e => {
          changeStateValueField(e.target.value, 'inputValue');
        }}
      />
      <select
        name="testName"
        id="testId"
        onChange={e => {
          changeStateValueField(e.target.value, 'selectValue');
        }}
      >
        <option value="value one">value one</option>
        <option value="value two">value two</option>
        <option value="value three">value three</option>
        <option value="value four">value four</option>
      </select>
    </>
  );
}
