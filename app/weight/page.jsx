import React from 'react'
import ConversionTable from '../components/ConversionTable'

export default function Weight () {
    return (

        //functions and logic

        <div className='flex justify-center'>
            <ConversionTable unitOne='Kilograms' unitTwo={'Pounds'}/>
        </div>
    )
}