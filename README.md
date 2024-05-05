# Assignment

## Docker Config

`FROM node:20-alpine` Setting, that defines the base Docker image. Using node 20 apine, because I am using Node v20.12.2 LTS.

`WORKDIR /usr/local/app` Setting, that defines the default application directory. The defined directory is created if it does not exist.

`COPY . /usr/local/app` Setting, that copies the local application files and directories to the defined directory.

`RUN npm install` Setting, that installs the Angular application dependencies.

`FROM nginx:latest` Setting, that defines nginx server base Docker image.

`COPY --from=node-build /usr/local/app/dist/assignment/browser /usr/share/nginx/html` Setting, that copies built files to ngnix root.

`EXPOSE 80` Setting, that exposing network port.

## Docker Build

`docker build -t assignment .` Command to build docker image

## Docker Run

`docker run -d -p 8080:80 assignment` Command to run a docker image
