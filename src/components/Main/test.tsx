import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render heading', () => {
    // renderizar o componente
    const { container } = render(<Main />)

    // busca o elemento e verifica a existência
    expect(screen.getByText(/react avançado/i)).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
