FROM php:7.2.5
RUN apt-get update -y && apt-get install -y openssl zip unzip git libonig-dev
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo pdo_mysql mbstring

RUN pecl install -o -f redis \
    &&  rm -rf /tmp/pear \
    &&  docker-php-ext-enable redis

COPY . /app
WORKDIR /app
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8181
EXPOSE 8181
