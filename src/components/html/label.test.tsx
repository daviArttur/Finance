import React from 'react'
import { render } from '@testing-library/react'
import Label from './Label'

test('Label', () => {
  const { getByText } = render(<Label htmlFor={'input-email'}>Email</Label>)

  const labelText = getByText('Email')
  const labelFor = labelText.getAttribute('for')
  
  expect(labelFor).toBe('input-email')
  expect(labelText).toBeTruthy()
})