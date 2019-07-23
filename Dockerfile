FROM node:latest
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install --only=prod
RUN npm run seed
EXPOSE 80
CMD [ "/bin/bash", "./seedAndStart.sh"]
