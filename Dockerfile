##### Prerequisite #####
FROM node:20-alpine AS deps
WORKDIR /usr/src/app

COPY package.json ./

RUN apk add --no-cache python3 make g++ libc6-compat && \
    npm install --omit=dev --legacy-peer-deps --ignore-scripts && \
    npm install bcryptjs --omit=optional

##### Builder #####
FROM node:20-alpine AS builder
ARG DIST_ENVIRONMENT
WORKDIR /usr/src/app
RUN apk add --no-cache python3 make g++ libc6-compat
COPY package.json ./
RUN npm install --legacy-peer-deps && npm install -g @nestjs/cli@10.4.5
COPY . .
RUN npm run build
RUN npm prune --omit=dev --legacy-peer-deps

##### Runner #####
FROM node:20-alpine AS runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/dist ./dist/
COPY --from=builder /usr/src/app/node_modules ./node_modules/
EXPOSE 9000
CMD ["node", "dist/main"]
