FROM nginx:latest

WORKDIR /var/www/html

## add permissions for nginx user
#RUN chown -R nginx:nginx /var/www/html && \
#        chown -R nginx:nginx /var/log/nginx && \
#        chown -R nginx:nginx /etc/nginx/conf.d
#RUN touch /var/run/nginx.pid && \
#        chown -R nginx:nginx /var/run/nginx.pid
RUN usermod -u 1000 nginx && groupmod -g 1000 nginx

# Add UID '1000' to www-data
#RUN usermod -u 1000 nginx

# Copy existing application directory permissions
#COPY --chown=www-data:www-data . /var/www/html

# Change current user to www
#USER nginx
