/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GiftGrid } from "../../src/components/GiftGrid"

describe('Pruebas en gift grid', () => {
  const category ='one punch'

  test('should mostrar cargando', () => {

    render(<GiftGrid category={category}/>)

    expect(screen.getByText('Cargando'))
    expect(screen.getByText(category))

  })
  
})
