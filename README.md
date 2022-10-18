# Troca Online

## Sobre
### Introdução
Para a criação da arquitetura das Views responsável pela interação do usuário, a ferramenta utilizada para o desenvolvimento é `VueJS`, um framework JavaScript usado para estruturação de interfaces, utilizando programação declarativa baseada em componentes e gerando uma aplicação de página única (SPA). A parte FrontEnd será responsável para realizar as requisições (Request) usando uma das quatro operações básicas CRUD (Create, Read, Update e Delete) para a camada de Controle dentro da parte BackEnd.

### Estruturação
A estrutura contém um arquivo principal para estruturação, denominado `App.vue`, onde pode ser montado as telas que devem ser utilizadas na aplicação. A pasta `../assets` contém recursos como imagens utilizados na própria aplicação, mas não serão imagens que os usuários utilizarão como imagem do perfil ou imagem dos produtos.

Já para as diferentes telas, dentro da pasta `../views` estará montado as telas utilizadas na aplicação e na pasta `../components` estarão os componentes responsáveis para estruturar cada View das telas.

A pasta de `../plugins` contém o arquivo `vuetify.js`, responsável para importar a biblioteca de design, na pasta `../router` terá o arquivo JS para fazer a gestão das rotas de endereços das telas e o arquivo index.js dentro da pasta `../store` realizará as requisições para a camada de Controle dentro da parte BackEnd.

### Arquitetura das Telas
Para as telas de `Login` e `Registro` do Usuário, haverá uma View única para a estruturação com diferentes componentes para a geração de ambas das telas.

Para as Telas de `Pesquisa`, `Objeto`, `Produtos` e `Cadastro`, uma View específica para estruturação com os componentes para o desenvolvimento das telas.

## Configurações para rodar a aplicação
### Instalar dependencias do projeto
```
npm install
```

## Rodando a aplicação
### Compilar e rodar com uma API `local`
```
npm run serve
```

### Compilar e rodar com a API de `teste`
```
npm run serve-test
```


## Referências

https://vuejs.org/guide/introduction.html#the-progressive-framework

https://vuetifyjs.com/en/introduction/why-vuetify/ 

https://vuex.vuejs.org/