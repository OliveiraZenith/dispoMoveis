# Documentação

## Visão geral
Aplicativo mobile em React Native (Expo) com tema de Pokédex.

Principais funções:
- Login e cadastro local de usuário
- Busca de pokémon por nome ou número da Pokédex
- Lista de pokémons salvos localmente
- Tela de detalhes com informações completas do pokémon

## Tecnologias usadas
- React Native
- Expo
- React Navigation (Stack)
- Axios
- Styled Components
- AsyncStorage

## Estrutura do projeto
- App.js: ponto de entrada da aplicação
- src/routes.js: configuração das rotas de navegação
- src/services/api.js: cliente HTTP com base da PokeAPI
- src/styles.js: design system da interface (cards, botões, inputs e badges)
- src/pages/login.js: tela de login
- src/pages/cadastro.js: tela de cadastro
- src/pages/main.js: tela principal de busca e listagem de pokémons
- src/pages/pokemon.js: tela de detalhes do pokémon

## Fluxo de telas
1. Login
- Lê o usuário salvo no AsyncStorage (chave: user)
- Valida email e senha
- Em caso de sucesso, navega para Main

2. Cadastro
- Coleta: nome, telefone, cpf, curso, email e senha
- Salva o objeto do usuário no AsyncStorage (chave: user)

3. Main
- Campo de busca por nome ou ID
- Faz requisição na PokeAPI para obter os dados do pokémon
- Evita duplicados por ID
- Salva e recupera a lista local pela chave pokemons
- Permite abrir detalhes e excluir um item

4. Pokemon (detalhes)
- Recebe pokémon selecionado por navegação
- Busca dados completos na API
- Exibe blocos:
  - Informações básicas
  - Habilidades
  - Status base

## Persistência local
O app utiliza AsyncStorage para manter dados mesmo após fechar.

Chaves usadas:
- user: dados do usuário cadastrado
- pokemons: lista de pokémons adicionados na Main

## Utilização da API (PokeAPI)
Base URL configurada em src/services/api.js:
- https://pokeapi.co/api/v2

### Endpoint principal usado
- GET /pokemon/{id-ou-nome}

### Outros GET usados
- GET /pokemon/{nome}
  - usado na busca da tela Main para adicionar um pokémon pelo nome digitado
- GET /pokemon/{id}
  - usado na tela de detalhes para carregar os dados completos do pokémon selecionado

Exemplos:
- /pokemon/1
- /pokemon/pikachu

### Onde a API é chamada
- src/pages/main.js
  - Busca de pokémon para adicionar na lista
- src/pages/pokemon.js
  - Busca de detalhes completos do pokémon

### Campos da resposta utilizados no app
- id: número da Pokédex do pokémon.
  - como é chamado: response.data.id
- name: nome do pokémon.
  - como é chamado: response.data.name
- sprites.front_default: imagem padrão usada no card da tela Main.
  - como é chamado: response.data.sprites.front_default
- sprites.other.official-artwork.front_default: imagem em maior qualidade usada na tela de detalhes.
  - como é chamado: pokemon.sprites.other["official-artwork"].front_default
- types: lista de tipos do pokémon (ex.: grass, poison).
  - como é chamado: response.data.types e pokemon.types
- height: altura do pokémon.
  - como é chamado: response.data.height
- weight: peso do pokémon.
  - como é chamado: response.data.weight
- base_experience: experiência base do pokémon.
  - como é chamado: pokemon.base_experience
- abilities: lista de habilidades exibida no bloco "Habilidades".
  - como é chamado: pokemon.abilities
- moves: lista de movimentos; no app são exibidos alguns movimentos principais.
  - como é chamado: pokemon.moves.slice(0, 8)
- stats: status base do pokémon; no app são usados HP, Attack, Defense e Speed.
  - como é chamado: pokemon.stats + filtro por stat.name (hp, attack, defense, speed)

## Tratamento de erros
- Busca na Main:
  - 404: pokémon não encontrado
  - outros erros: falha de conexão/requisição
- Tela Pokemon:
  - caso a requisição falhe, exibe alerta e estado vazio

## Padrão visual
Design inspirado em Pokédex com:
- Cor primária: #EF5350
- Fundo: #F5F5F5
- Cartões com bordas arredondadas e sombra
- Layout responsivo e focado em mobile

## Como executar
1. Instalar dependências:
- npm install

2. Iniciar projeto:
- npm start

3. Executar em plataforma:
- npm run android
- npm run ios
- npm run web
