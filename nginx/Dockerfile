FROM nginx:latest

# move config
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx

# enable sites
COPY sites-available/ /etc/nginx/sites-available/
RUN mv /etc/nginx/sites-available /etc/nginx/sites-enabled/





