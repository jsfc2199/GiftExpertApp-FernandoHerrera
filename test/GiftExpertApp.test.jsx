import { fireEvent, render, screen } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

/* eslint-disable no-undef */
describe('Pruebas en GiftExpertApp', () => {
  test('should add new categories', () => {
    render(<GiftExpertApp/>)

    expect(screen.getByText('Gift App'))

    const input = screen.getByRole('textbox')

    //recordemos que en el addCategory colocamos un aria-label de identificar el formulario para postear
    const form = screen.getByRole('form')

    fireEvent.input(input, {target: {value: 'primero'}})
    fireEvent.submit(form)

    fireEvent.input(input, {target: {value: 'segundo'}})
    fireEvent.submit(form)
    
    
    expect(screen.getAllByRole('heading', {level: 2}).length ).toBe(2)
  })

  
  test('should not add a repeated category', () => {
    render(<GiftExpertApp/>)

    expect(screen.getByText('Gift App'))

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, {target: {value: 'primero'}})
    fireEvent.submit(form)

    fireEvent.input(input, {target: {value: 'segundo'}})
    fireEvent.submit(form)

    fireEvent.input(input, {target: {value: 'primero'}})
    fireEvent.submit(form)
    
    
    expect(screen.getAllByRole('heading', {level: 2}).length ).toBe(2)
  })
  
})
