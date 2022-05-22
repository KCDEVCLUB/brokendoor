FROM node:alpine3.15
WORKDIR /app
COPY ["package.json", "index.js", ".npmrc", "./"]
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "server"]