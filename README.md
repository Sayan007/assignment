# Docker

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

Prepared image file: [Docker Image File](https://github.com/Sayan007/assignment/blob/main/assignment.tar)

Open `http://localhost:8080` on browser to nevigate the website

# Backstage

## Backstage Installation

`npx @backstage/create-app@latest` to install your backstage app

Provide a name of your project while installing it.

`cd <project-name>` to nevigate into the project directory

`npm i yarn` to install yarn for your project

`yarn dev` to run your backstage app

## Backstage Configuration For Your Project

Create a `catalog-info.yaml` into your project directory

Write the following config to `catalog-info.yaml` [catalog-info.yaml](https://github.com/Sayan007/assignment/blob/main/catalog-info.yaml)

```
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: assignment-sc
  title: Assignment on Angular and Docker for SC
  description: |
    Dockerized application of Angular for assignment
  annotations:
    github.com/project-slug: Sayan007/assignment
    backstage.io/techdocs-ref: value
  tags:
    - angular
    - js
    - docker
spec:
  type: website
  owner: user:Sayan007
  lifecycle: development
---
# https://backstage.io/docs/features/software-catalog/descriptor-format#kind-system
apiVersion: backstage.io/v1alpha1
kind: System
metadata:
  name: docker-deployment
spec:
  owner: user:Sayan007
```

## Adding Your Project as Component in Backstage

Navigate to <kbd>Create > Register Existing Component</kbd>

Add `https://github.com/Sayan007/assignment/blob/main/catalog-info.yaml` and click <kbd>Analyze</kbd>, then <kbd>Import</kbd> and then <kbd>View Component</kbd>
