# KinoRadar
Приложение для поиска фильмов по различным категориям и запросам.

<img src="https://i.imgur.com/Y0Zxlyi.gif" width="800px"/>

### Чтобы запустить проект необходимо: 

Cоздать базу данных в PostgreSQL

```sql
  CREATE USER testUser PASSWORD 'qwerty'
  CREATE DATABASE yourNameDB OWNER testUser
  GRANT ALL PRIVILEGES ON DATABASE yourNameDB TO testUser
```
В корневой папке

```npm
  npm i 
  npm start
