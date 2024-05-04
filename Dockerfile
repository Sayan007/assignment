FROM node:20-alpine as node-build
WORKDIR /usr/local/app
COPY . /usr/local/app
#RUN npm install -g @angular/cli
RUN npm install
RUN npm run build


FROM nginx:latest
COPY --from=node-build /usr/local/app/dist/assignment/browser /usr/share/nginx/html
EXPOSE 80