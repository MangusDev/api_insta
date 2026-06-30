# api_insta

{ PROJETO PESSOA DE ESTUDO!!! }
API REST simula o instagram em Node.js com Express e Sequelize, conectada a um banco MySQL. Expõe rotas para consulta de usuários e verificação de saúde da aplicação.

## Tecnologias

- Node.js 20+
- Express 5
- Sequelize + MySQL
- Yarn 4 (Plug'n'Play)

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- [Yarn](https://yarnpkg.com/) 4 (`corepack enable` habilita o Yarn definido no projeto)
- MySQL 8 (local ou via Docker)

## Configuração do ambiente

Na raiz do projeto, crie um arquivo `.env` com as variáveis abaixo:

```env
PORT=3003

DIALECT=mysql
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=sua_senha
DATABASE=insta
DB_PORT=3306
```

> Ao subir o banco com Docker Compose, altere `DB_HOST=db` (nome do serviço no `docker-compose.yaml`).

Se for usar o MySQL do Docker Compose, adicione também as variáveis que a imagem oficial do MySQL espera:

```env
MYSQL_ROOT_PASSWORD=sua_senha
MYSQL_DATABASE=insta
```

Use a mesma senha em `DB_PASSWORD` e `MYSQL_ROOT_PASSWORD`.

## Instalação

```bash
corepack enable
yarn install
```

## Banco de dados

### Opção 1 — MySQL local

1. Crie o banco de dados:

```sql
CREATE DATABASE insta;
```

2. Execute as migrations:

```bash
yarn sequelize-cli db:migrate
```

### Opção 2 — MySQL com Docker Compose

Suba apenas o serviço de banco:

```bash
docker compose up db -d
```

Depois, com `DB_HOST=localhost` no `.env`, rode as migrations na sua máquina:

```bash
yarn sequelize-cli db:migrate
```

## Executando a aplicação

### Desenvolvimento (local)

```bash
yarn start
```

O servidor sobe com nodemon e recarrega ao salvar alterações. A saída esperada é:

```
Servidor na porta: 3003
```

### Docker Compose (app + banco)

1. No `.env`, defina `DB_HOST=db`.
2. Suba os serviços:

```bash
docker compose up --build
```

A API ficará disponível em `http://localhost:3003`.

## Endpoints

| Método | Rota      | Descrição                          |
|--------|-----------|------------------------------------|
| GET    | `/health` | Verifica se a API está respondendo |
| GET    | `/users`  | Lista todos os usuários            |

### Exemplos

```bash
curl http://localhost:3003/health
```

```bash
curl http://localhost:3003/users
```

## Estrutura do projeto

```
src/
├── apps/models/       # Modelos Sequelize
├── configs/           # Configuração do banco
├── database/
│   ├── migrations/    # Migrations
│   └── index.js       # Conexão com o banco
├── routes.js          # Rotas da API
└── server.js          # Entrada da aplicação
```

## Scripts úteis

| Comando                         | Descrição                    |
|---------------------------------|------------------------------|
| `yarn start`                    | Inicia o servidor (nodemon)  |
| `yarn sequelize-cli db:migrate` | Aplica migrations pendentes  |
