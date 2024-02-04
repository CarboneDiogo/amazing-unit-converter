import React from 'react'
import ConversionTable from '../components/ConversionTable'

export default function Temperature () {
    return (
        <main className='flex justify-center'> 
            <ConversionTable unitOne='Celsius' unitTwo='Fahrenheit' />
        </main>
    )
}