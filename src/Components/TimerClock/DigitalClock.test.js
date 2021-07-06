import React from 'react';
import {DigitalClock} from './DigitalClock'
import {render} from '@testing-library/react'



test('render the Digitl Clock Comp',() =>{
    const renderH1=render(<DigitalClock/>)
    const DClock=renderH1.getByText(/Digital Clock/i)
    expect(DClock).toBeInTheDocument()
})