# Set master image
FROM php:8.1-fpm

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/html/

# Set working directory
WORKDIR /var/www/html/

# Install Additional dependencies
# Install dependencies
RUN apt-get update && \
    apt-get install -y \
        curl \
        libpng-dev \
        libonig-dev \
        libxml2-dev \
        zip \
        unzip

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd


# Add and Enable PHP-PDO Extenstions
#RUN docker-php-ext-install pdo pdo_mysql
#RUN docker-php-ext-enable

# Install PHP Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Remove Cache
RUN rm -rf /var/cache/apk/*


RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
# Run NPM
#RUN npm install
#RUN npm run dev


# Add UID '1000' to www-data
RUN usermod -u 1000 www-data

# Copy existing application directory permissions
COPY --chown=www-data:www-data . /var/www/html

RUN mkdir /var/www/.npm
RUN chown -R 1000:33 /var/www/.npm
# Change current user to www
USER www-data

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]

#FROM nginx:1.23.3

#WORKDIR /var/www/html

## add permissions for nginx user
#RUN chown -R nginx:nginx /var/www/html && \
#        chown -R nginx:nginx /var/log/nginx && \
#        chown -R nginx:nginx /etc/nginx/conf.d
#RUN touch /var/run/nginx.pid && \
#        chown -R nginx:nginx /var/run/nginx.pid
#RUN usermod -u 1000 nginx && groupmod -g 1000 nginx

# Add UID '1000' to www-data
#RUN usermod -u 1000 nginx

# Copy existing application directory permissions
#COPY --chown=www-data:www-data . /var/www/html

# Change current user to www
#USER nginx
