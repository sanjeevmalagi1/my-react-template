import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import BasicLayout from "../layouts/Basic";

import { basicAction, thunkAction } from '../slices/basic';

const Home = () => {
  const dispatch = useDispatch()

  const basicState = useSelector(state => state.basic);

  const handleBasicDetails = () => {
    // dispatch(basicAction({ someData: `${Math.random()} HEHAHEHA` }));
    dispatch(thunkAction(`${Math.random()} HEHAHEHA`));
  };

  return (
    <BasicLayout>
        <p>Home page</p>
        <button onClick={() => handleBasicDetails()}> Add Basic data </button>
    </BasicLayout>
  );
}

export default Home;