# 📝 TaskMaster - Gestionnaire de tâches personnel

TaskMaster est une application web simple, de gestion de tâches personnelles développée dans le cadre d'un TP DevOps. Elle permet d'ajouter, afficher, marquer comme terminées, et supprimer des tâches, avec persistance locale via le localStorage du navigateur.

## 🚀 Fonctionnalités

- ✅ Ajouter une tâche à la liste
- 📋 Afficher toutes les tâches avec leur statut
- ✔️ Marquer une tâche comme terminée / en cours
- ❌ Supprimer une tâche de la liste
- 💾 Sauvegarde automatique des tâches dans le navigateur, même après fermeture

## 🛠️ Technologies utilisées

- HTML / CSS / JavaScript
- Docker (conteneurisation)
- Git + GitHub (versionnement)
- Trello (gestion de projet)

## 🐳 Lancement avec Docker

### 1. Cloner le dépôt

```bash
git clone https://github.com/Gildas29/TaskMaster.git
cd taskmaster
```

### 2. Ouvrir un invite de commande à la racine du projet

```bash
docker build -t taskmaster .
docker run -d -p 8080:80 taskmaster
