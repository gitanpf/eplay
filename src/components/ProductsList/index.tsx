import Game from '../../models/Game'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <Title>{title}</Title>
    <List>
      {games.map((game) => (
        <Product
          key={game.id}
          category={game.category}
          description={game.description}
          image={game.image}
          information={game.information}
          system={game.system}
          title={game.title}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
