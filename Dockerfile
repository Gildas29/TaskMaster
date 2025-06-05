# Utilise l'image officielle de Nginx comme base
FROM nginx:alpine

# Répertoire dans lequel Nginx sert les fichiers
WORKDIR /usr/share/nginx/html

# Supprime les fichiers par défaut
RUN rm -rf ./*

# Copie les fichiers du projet dans le dossier de Nginx
COPY . .

# Expose le port 80
EXPOSE 80