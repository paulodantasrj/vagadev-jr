import { Conteiner, Menu, Logo, Info, Wrapper } from './style'

export function Header() {
  return (
    <Conteiner>
      <Menu>
        <Logo>
          <img src='/img/icon_hamburguer.png' alt='menu' />
          <img src='/img/logo.png' alt='logo' />
        </Logo>
        <Info>
          <img src='/img/paper-plane.png' alt='contato' /> Contato |
          <img src='/img/search-solid.png' alt='pesquisa' /> Buscar |
          <img src='/img/shopping-bag-solid.png' alt='compras' />
        </Info>
      </Menu>
      <Wrapper>
        <h1>MORTAL KOMBAT</h1>
        <h2>R$ 299,99</h2>
        <p>
          Mortal Kombat X combina uma apresentação cinemática única com uma
          jogabilidade totalmente nova. Os jogadores podem escolher pela
          primeira vez diversas variantes de cada personagem, afetando tanto a
          estratégia como o estilo de luta.
        </p>
      </Wrapper>
    </Conteiner>
  )
}
