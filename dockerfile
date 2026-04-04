FROM node:20-alpine AS deploy

WORKDIR /ai_app

COPY package.json .

RUN npm install


COPY . .


RUN npm run build




FROM node:20-alpine


WORKDIR /app 

COPY --from=deploy  /ai_app/dist ./dist
COPY --from=deploy  /ai_app/node_modules ./node_modules

EXPOSE 3001

CMD ["node", "dist/src/main.js"]