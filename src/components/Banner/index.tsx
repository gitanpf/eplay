import { Imagem, Titulo, Preco } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import TagContainer from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <TagContainer size="big">Destaque do dia</TagContainer>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          De <span>R$ 250,00</span>
          <br />
          por apenas R$ 99,90
        </Preco>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar esta oferta!"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
