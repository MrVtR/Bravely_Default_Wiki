# Bravely_Default_API

## Conceito do projeto
Este projeto consiste em construir uma Wiki para o jogo Bravely Default do Nintendo 3DS, tendo o objetivo de fazer um projeto FullStack, utilizando ReactJS para o Front-end e NodeJS para o Back-End. <br/> 
A parte Front-End do projeto é o design e funções web das páginas,além do consumo da API feita por mim, enquanto o Back-End fica com a construção e configuração da API, que podem ser verificadas no respositório [deste link](https://github.com/MrVtR/Bravely_Default_API)<br/>
O site criado conta com Cinco abas principais planejadas:
1. **Home** - Página inicial do projeto, onde é apresentado a origem do jogo, juntamente com sua história completa. Além disso, mostro também as capas de todas as versões regionais do jogo: Americana, Europeia e Japonesa
2. **Personagens** - Página com a função de exibir os personagens principais do jogo. No momento, esta aba está em progresso, contando atualmente com os 4 personagens jogáveis, suas origens e uma função de clique para ver mais detalhes do personagem, incluindo sua história inteira dentro do jogo. Futuramente, esta aba será comtemplada com todos os personagens que ajudam os principais ao decorrer da história
3. **Vilões** - Página com a função de exibir todos os vilões do jogo de forma individual em uma listagem, tendo um paragrafo de origem para apresentar o vilão ao usuário e sendo possível clicar na imagem do vilão para obter mais detalhes dele, como sua história durante o jogo. Futuramente, esta aba será complementada para que todos os vilões estejam listados em ordem alfabética.
4. **Locais** - Página que terá a função de exibir todos os locais pelos quais o jogador poderá passar durante a história, revelando a origem destes locais, bem como segredos que podem ser encontrados dentro deles, no momento, esta página ainda não foi iniciada e está planejada para a segunda fase do projeto
5. **Organizações** - Página com a função de exibir todas os grupos de vilões que existe dentro do jogo, apresentando ao usuário um paragrafo do papel destas organizações dentro do jogo e expandindo os detalhes em uma nova página ao clicar em suas imagens, mostrando a história completa, desde a origem até a queda da organização

### To-Do List
- [x] Criação e configuração para consumo da API na página Home
- [x] Criação e configuração para consumo da API na página Personagens
- [x] Criação e configuração para consumo da API na página Vilões
- [x] Criação e configuração para consumo da API na página Organizações
- [x] Implementação de função de Mais Detalhes para ser utilizado nas páginas
- [x] Implementação de Página de Loading, contando com tempo de loading baseado no consumo da API e estilização interativa com o auxílio do React Tilt
- [ ] Acrescentar mais dados na API para as abas de Personagens e Vilões
- [ ] Criar uma galeria de fotos individual para cada item que será mostrado na função de Mais Detalhes, utilizada por todas as páginas, com exceção da Home
- [ ] Criar página de Locais e acrescentar os dados necessários na API
- [ ] Planejar páginas de descrições de Itens e Classes do jogo

## Pré-requisitos e recursos utilizados
Para o projeto ser realizado, foi utilizado as seguintes dependências para ReactJS:
1. [ReactJS: 0.17.1](https://github.com/facebook/react/releases)
2. [React-router-dom: 5.2.0](https://reactrouter.com/web/guides/quick-start)
3. [Node Sass: 4.14.1](https://www.npmjs.com/package/node-sass/v/4.14.1)
4. [Axios: 0.21.1](https://github.com/axios/axios)
5. [React Tilt](https://github.com/jonathandion/react-tilt)
  
## Passo a passo
1. Estudei como fazer um esboço do projeto baseado na [Wiki "Oficial"](https://bravelydefault.fandom.com/wiki/Bravely_Default_Wiki) do jogo
2. Criei o projeto e mapeei as rotas através do React-router-dom, além de fazer a configuração dos requests da API com o Axios
3. Criei os componentes comuns que poderiam ser utilizados no projeto todo
4. Montei as páginas principais e estilizei usando Sass e o React Tilt
5. Efetuei um Code Review em cada um dos componentes e páginas para buscar bugs e otimizar os códigos produzidos

## Instalação
Para instalar as dependências do projeto localmente, utilize a instrução abaixo:
1. Após baixar o projeto, digite no terminal ```yarn install``` e espere pela instalação das dependências, após isso, siga para a etapa de [Execução](#Execução)

## Execução
Para executar o programa é necessário instalar as dependências utilizadas, que estão no package.json e após isso executar o projeto,para estar operações, utilize os comandos abaixo:
1. Digite no terminal ```yarn start``` para rodar o projeto em modo desenvolvimento.


## Autores
* Vítor Ribeiro ([MrVtR](https://github.com/MrVtR))

## Imagens/screenshots
![Imagem](https://github.com/MrVtR/Bravely_Default_Wiki/blob/main/imagesGithub/home.PNG)

---
![Imagem](https://github.com/MrVtR/Bravely_Default_Wiki/blob/main/imagesGithub/personagens.PNG)

---
![Imagem](https://github.com/MrVtR/Bravely_Default_Wiki/blob/main/imagesGithub/organizacoes.PNG)

---
![Imagem](https://github.com/MrVtR/Bravely_Default_Wiki/blob/main/imagesGithub/Bloodrose_Legion.PNG)

---
