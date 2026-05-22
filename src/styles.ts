import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#EEEEEE',
  preto: '#111111',
  cinza: '#333333',
  cinzaClaro: '#A3A3A3',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background-color: ${cores.preto};
  color: ${cores.branco};
  padding-top: 40px;
}
.container {
  max-width: 1024px;
  widht: 100%;
  margin: 0 auto;
}
`
