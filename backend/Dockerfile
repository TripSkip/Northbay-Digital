# backend/Dockerfile
FROM node:20-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --include=dev

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]

FROM base AS dev
ENV NODE_ENV=development
RUN apk add --no-cache curl
CMD ["npm", "run", "dev"]

HEALTHCHECK --interval=10s --timeout=5s --retries=5 CMD curl -f http://localhost:4000/health || exit 1
