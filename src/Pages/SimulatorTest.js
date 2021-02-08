// @flow

import { Button } from '@material-ui/core';
import * as React from 'react';
import { useEffect, useState } from "react";
import UsageGraph from '../Components/UsageGraph';
import { generate_model, generate_timestamps } from '../lib/model';
import type { Model } from '../lib/types'

export const SimulatorTest = (): React.Node => {
  let [done, setDone] = useState(false)
  useEffect(() => {
    // Generate 20 models
    let start = new Date();
    for (let i = 0; i < 20; i++) {
      generate_model({
        location: "Canada",
        squareFootage: 450,
        monthlySummerUsage: 100,
        monthlyWinterUsage: 80,
        dishwasher: true,
        stove: true,
        oven: true,
        washer: true,
        dryer: true,
        heat: true,
        ac: true,
        fridge: true,
        freezer: true,
        secondFridge: true,
        secondFreezer: true,
        dishwasherUsage: 2,
        stoveUsage: 2,
        ovenUsage: 2,
        washerUsage: 2,
        dryerUsage: 2,
        acUsage: 15,
      })
    }
    setDone(new Date().getTime() - start.getTime());
  }, [])

  return <div>{done}ms to generate 20 models</div>
}

export default SimulatorTest;