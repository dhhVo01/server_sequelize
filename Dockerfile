FROM node:lts-alpine3.17 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /server

COPY package.json package-lock.json ./
RUN npm install -g npm@9.6.1 --silent
RUN npm install --silent

FROM node:lts-alpine3.17 AS builder
WORKDIR /server
COPY --from=deps /server/node_modules ./node_modules
COPY . .

RUN npm install -g typescript --silent
RUN npm run build --silent

FROM node:lts-alpine3.17 AS runner
WORKDIR /server


COPY --from=builder /server/build ./build
COPY --from=builder /server/node_modules ./node_modules
COPY --from=builder /server/package.json ./package.json


EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]