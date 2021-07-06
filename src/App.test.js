import React from 'react';
import { render} from '@testing-library/react';
import App from './App';
import {DigitalClock} from './Components/TimerClock/DigitalClock'

test('renders learn react link', () => {
   const renderDiv=   render(<App />);
  const linkElement = renderDiv.getByText(/Hello World/);
  expect(linkElement).toBeInTheDocument();
});

