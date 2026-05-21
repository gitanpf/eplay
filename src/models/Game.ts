class Game {
  category: string
  description: string
  image: string
  information: string[]
  system: string
  title: string
  id: number

  constructor(
    category: string,
    description: string,
    image: string,
    information: string[],
    system: string,
    title: string,
    id: number
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.information = information
    this.system = system
    this.title = title
  }
}

export default Game
