'use client'

import React, { useState } from 'react'
import Button from './Button';

const ConversionTable = (props) => {

    const [unitOne, setUnitOne] = useState(props.unitOne)
    const [unitTwo, setUnitTwo] = useState(props.unitTwo)
    const [switchConversion, setSwitchConversion] = useState(false)
    const [results, setResults] = useState([])

    const [input, setInput] = useState("")

    const change = () => 
    {
        const newValue = event.target.value
        setInput(newValue)
    }

    const switchClick = () =>
    {
        const previousUnitOne = unitOne;
        const previousUnitTwo = unitTwo;
        
        setUnitOne(previousUnitTwo);
        setUnitTwo(previousUnitOne);
        setResults([])
    }

    const calculate = () => 
    {
        const splitValues = input.split(",")
        const castedValues = splitValues.map((x) => Number(x))
        
        const convertedValues = castedValues.map((x) => conversionEngine(unitOne, unitTwo, x))
        setResults(convertedValues);
    }

    const conversionEngine = (unitOne, unitTwo, value) =>
    {
        let convertedUnit;

        switch(unitOne + '-' + unitTwo) {
            case 'Kilograms-Pounds':
                convertedUnit = value*2.2046244202
                break;
            case 'Pounds-Kilograms':
                convertedUnit = value*0.453592
                break;
            case 'Kilometers-Miles':
                convertedUnit = value*0.6213688756
                break;
            case 'Miles-Kilometers':
                convertedUnit = value*1.60935
                break;
            case 'Celsius-Fahrenheit':
                convertedUnit = (value*1.8)+32
                break;
            case 'Fahrenheit-Celsius':
                convertedUnit = (value-32)*(5/9)
                break;
        }

        return convertedUnit.toFixed(2);
    }

  return (
    <main className='border border-solid w-6/12 m-6'> 
        <div>
            <div className='flex justify-between items-center m-4 max-h-10'>
                <p>Convert.:</p>
                <div className='w-20'>{unitOne}</div>
                <div>
                    <Button buttonTitle='↔'onClick={switchClick} fontSize='3xl'/>
                </div>
                <div className='w-20 '>{unitTwo}</div>
            </div>
            <div className='flex flex-col'>
                <p className='border border-solid text-center text-1xl p-3'>Provide the values - If more than one, separate them with a comma: </p>
                <input type='text' className='text-black w-full h-8 p-3' onChange={change}></input>
                <Button buttonTitle='Calculate' onClick={calculate}  fontSize='1xl'/>
            </div>
        </div>
        <div className='flex flew-row justify-evenly'>
            <p className='text-1xl p-3'>Results in {unitTwo}: </p>
            <div className='p-3'>
                {results.map((result, index) => {
                    return <p key={index}> {result} </p>
                })}
            </div>
        </div>
    </main>
  )

}

export default ConversionTable