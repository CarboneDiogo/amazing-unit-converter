"use client"
import React from 'react'
import { useState } from 'react'
import ConversionTable from '../components/ConversionTable'

export default function Distance() {
    
  return (
    <main className='flex justify-center'>
        <ConversionTable unitOne='Kilometers' unitTwo='Miles'/>
    </main>
  )
}
