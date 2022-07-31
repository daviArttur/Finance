import { render, renderHook, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import useForm from './useForm'

describe('Test returns input type email by hook useForm', () => {
  
  it('expected true return for write correct email', () => {
    const { result } = renderHook(() => useForm({ option: 'email' } ))
    const { onChange, value } = result.current
    render(<input data-testid='input' onChange={onChange} value={value}/>)

    const input: HTMLInputElement = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: 'goodExample@example.com' } })

    expect(result.current.value).toBe('goodExample@example.com')
    expect(result.current.validate().regex).toBeTruthy()
    expect(result.current.validate().warningMessage).toBeUndefined()
  })

  it('wait for validation fail with invalid email', () => {
    const { result } = renderHook(() => useForm({ option: 'email' } ))
    const { onChange, value } = result.current
    render(<input data-testid='input' onChange={onChange} value={value}/>)

    const input: HTMLInputElement = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: 'badExampleasas' } })

    expect(result.current.value).toBe('badExampleasas')
    expect(result.current.validate().regex).toBeFalsy()
    expect(result.current.validate().warningMessage).toBeTruthy()
  })

  it('wait for validation fail with empty value', () => {
    const { result } = renderHook(() => useForm({ option: 'email' } ))
    const { onChange, value } = result.current
    render(<input data-testid='input' onChange={onChange} value={value}/>)

    const input: HTMLInputElement = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: '' } })

    expect(result.current.value).toBe('')
    expect(result.current.validate().regex).toBeFalsy()
    expect(result.current.validate().warningMessage).toBeTruthy()
  })
})

describe('await return by input type passoword', () => {
  it('expect true return correct password case', () => {
    const { result } = renderHook(() => useForm({ option: 'password' } ))
    const { onChange, value } = result.current
    render(<input data-testid='input' onChange={onChange} value={value}/>)

    const input: HTMLInputElement = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: 'exemplepassword' } })

    expect(result.current.value).toBe('exemplepassword')
    expect(result.current.validate().regex).toBeTruthy()
    expect(result.current.validate().warningMessage).toBeFalsy()
  })

  it('it await false return with password not valid', () => {
    const { result } = renderHook(() => useForm({ option: 'password' } ))
    const { onChange, value } = result.current
    render(<input data-testid='input' onChange={onChange} value={value}/>)

    const input: HTMLInputElement = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: 'qwe' } })

    expect(result.current.value).toBe('qwe')
    expect(result.current.validate().regex).toBeFalsy()
    expect(result.current.validate().warningMessage).toBeTruthy()
  })

  it('expect false return by empty value', () => {
    const { result } = renderHook(() => useForm({ option: 'password' } ))
    const { onChange, value } = result.current
    render(<input data-testid='input' onChange={onChange} value={value}/>)

    const input: HTMLInputElement = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: '' } })

    expect(result.current.value).toBe('')
    expect(result.current.validate().regex).toBeFalsy()
    expect(result.current.validate().warningMessage).toBeTruthy()
  })
})

describe('expect returns by input type default', () => {
  it('await true validation by correct validation', () => {
    const { result } = renderHook(() => useForm({ option: 'default' } ))
    const { onChange, value } = result.current
    render(<input data-testid='input' onChange={onChange} value={value}/>)

    const input: HTMLInputElement = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: '@a%SD.-co' } })

    expect(result.current.value).toBe('@a%SD.-co')
    expect(result.current.validate().regex).toBeTruthy()
    expect(result.current.validate().warningMessage).toBeFalsy()
  })

  it('return false with empty value', () => {
    const { result } = renderHook(() => useForm({ option: 'default' } ))
    const { onChange, value } = result.current
    render(<input data-testid='input' onChange={onChange} value={value}/>)

    const input: HTMLInputElement = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: '' } })

    expect(result.current.value).toBe('')
    expect(result.current.validate().regex).toBeFalsy()
    expect(result.current.validate().warningMessage).toBeTruthy()
  })
})