# FROM ubuntu
# RUN apt-get update
# RUN apt-get install nginx -y
# COPY . /var/www/html/
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM nginx
COPY . /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf