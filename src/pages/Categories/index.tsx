import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
  {
    id: 2,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
  {
    id: 3,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
  {
    id: 4,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
  {
    id: 6,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
  {
    id: 7,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
  {
    id: 8,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
  {
    id: 6,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
  {
    id: 7,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
  {
    id: 8,
    category: 'Ação',
    description: 'Lorem',
    image: zelda,
    information: ['10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'Legend Of Zelda'
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
