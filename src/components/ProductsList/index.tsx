import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => (
  <Container background={background}>
    <Title>{title}</Title>
    <List>
      <Product
        category="Ação"
        description="teste"
        image="//placehold.it/222x250"
        information={['-10%', 'R$ 150']}
        system="PC"
        title="Nome do jogo"
      />
      <Product
        category="Ação"
        description="teste"
        image="//placehold.it/222x250"
        information={['-10%', 'R$ 150']}
        system="PC"
        title="Nome do jogo"
      />
      <Product
        category="Ação"
        description="teste"
        image="//placehold.it/222x250"
        information={['-10%', 'R$ 150']}
        system="PC"
        title="Nome do jogo"
      />
      <Product
        category="Ação"
        description="teste"
        image="//placehold.it/222x250"
        information={['-10%', 'R$ 150']}
        system="PC"
        title="Nome do jogo"
      />
    </List>
  </Container>
)

export default ProductList
