FROM node:alpine3.15

WORKDIR /app
COPY package.json ./
RUN npm install
EXPOSE 3000

CMD ["npm", "start"]