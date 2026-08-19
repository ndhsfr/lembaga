# Menggunakan image resmi WordPress berbasis Apache & PHP
FROM wordpress:latest

# Menentukan directory kerja
WORKDIR /var/www/html

# Menyalin seluruh kode dari repository ke dalam container
COPY . .

# Mengatur hak akses folder agar WordPress bisa mengunggah file/media
RUN chown -R www-data:www-data /var/www/html

# Mengisi Port default HTTP
EXPOSE 80
