import Tag from '../Tag'
import { Card, Titulo, Descricao, Info } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  information: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  information,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Info>
      {information.map((info) => (
        <Tag key={info}>{information}</Tag>
      ))}
    </Info>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
