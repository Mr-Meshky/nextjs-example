FROM node:18-alpine
EXPOSE 3000

WORKDIR /app    
COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build
CMD ["pnpm", "run", "start"]