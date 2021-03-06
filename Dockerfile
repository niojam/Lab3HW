# Step 1
FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
COPY . /app
RUN yarn install
RUN yarn build

# Stage 2
#FROM nginx:1.17.1-alpine
#COPY nginx/local-default.conf /usr/share/nginx/conf.d/default.conf
#COPY --from=build-step /app/build /usr/share/nginx/html
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/local-default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]