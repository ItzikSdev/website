FROM node:latest
WORKDIR /app
RUN npm install -g pnpm 
COPY package.json pnpm-lock.yaml ./
RUN pnpm i 
COPY . .
EXPOSE 5173
CMD [ "pnpm", "dev" ]