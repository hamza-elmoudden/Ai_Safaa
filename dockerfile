FROM node:20-alpine as one

WORKDIR /ai_app

COPY package.json .

RUN npm install


COPY . .


RUN npm run build




FROM node:20-alpine


WORKDIR /app 

COPY --from=one  /ai_app/dist ./dist
COPY --from=one  /ai_app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/main.js"]