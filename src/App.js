import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import { Button } from 'antd';
import './style.css';

const Log = props => {
  const { count } = props;
  const dateFormat = 'YYYY-MM-DD HH:mm:ss';
  const startTime = moment().format(dateFormat);
  useEffect(() => {
    console.log('log count ' + count);
  }, [count]);
  return (
    <div>
      <p>log count message:{count} </p>
      <p>log time message:{startTime} </p>
    </div>
  );
};

const Condition = props => {
  const { count, condition } = props;

  // useEffect(() => {
  //   console.log('Condition count');
  //   console.log(count);
  //   if (count === 1) return;
  // }, [count]);
  useEffect(() => {
    console.log(condition);
  }, [condition]);
  return (
    <div>
      {/* <h1>condition count: {count}</h1>*/}
      <h1>condition {condition.name}</h1>
      {/* <Log count={count} />  */}
    </div>
  );
};

export default function App() {
  const [count, setCount] = useState(0);
  const [condition, setCondition] = useState({ name: 'jack' });

  useEffect(() => {
    console.log(count);
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Button onClick={() => setCount(count + 1)} type="primary">
        Click me
      </Button>
      <Button onClick={() => setCondition({ name: 'tom' })} type="primary">
        setCondition
      </Button>
      <Condition count={count} condition={condition} />
    </div>
  );
}
