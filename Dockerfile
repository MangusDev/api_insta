FROM node:20-alpine

WORKDIR /usr/src/app

# .yarnrc.yml precisa existir antes do install (define nodeLinker: node-modules)
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

RUN corepack enable && yarn install --immutable

COPY . .

EXPOSE 3003

CMD ["yarn", "start"]
