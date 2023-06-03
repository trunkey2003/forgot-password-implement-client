import { useState } from "react";
import { useLoaderData } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import { Button } from "antd";

export default function Home() {
  const [data, setData] = useState(useLoaderData());
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center space-x-6">
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
      </div>
    </div>
  );
}
