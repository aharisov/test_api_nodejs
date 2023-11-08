
# Le projet pédagogique: découverte du API Node.js

Le principal but de ce projet et de faire un API en Node.js à l'aide de TypeScript. J'utilise le fichier "/data/data.json" comme une base de données.

Dans ce projet j'utilise la base de données des utilisateurs.

## Installation

Pour installer le projet il faut : 
- installer toutes les dependances à la racine du projet

```bash
    npm install
```

- démarrer le serveur

```bash
    npm run dev
```
## Référence API

#### Récupérer tous les utilisateurs

```http
  GET /users/users-list
```

#### Récupérer un utilisateur par id

```http
  GET /users/users-list/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id d'utilisateur |


#### Créer un utilisateur

```http
  POST /auth/signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Prénom d'utilisateur |
| `email`      | `string` | **Required**. Email d'utilisateur |
| `password`      | `string` | **Required**. Password d'utilisateur |
| `image`      | `string` | **Optionnel**. Avatar d'utilisateur |

Il faut ajouter tous les parametres dans le body de requête :

```js
    {
        "name": "Prénom",
        "email": "test@test.com",
        "password": "123456",
        "image": "lien"
    }
```

#### Authorizer un utilisateur

```http
  POST /auth/signin
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email d'utilisateur |
| `password`      | `string` | **Required**. Password d'utilisateur |

Il faut ajouter tous les parametres dans le body de requête :

```js
    {
        "email": "test@test.com",
        "password": "123456"
    }
```

S'il n'y a pas de problèmes, l'utilisateur va recevoir un token. 

#### Modifier un utilisateur

```http
  PUT /users/users-list/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id d'utilisateur |
| `name`      | `string` | **Optionnel**. Prénom d'utilisateur |
| `email`      | `string` | **Optionnel**. Email d'utilisateur |
| `password`      | `string` | **Optionnel**. Password d'utilisateur |
| `image`      | `string` | **Optionnel**. Avatar d'utilisateur |

Il faut ajouter tous les parametres (sauf id) dans le body de requête :

```js
    {
        "name": "Prénom",
        "email": "test@test.com",
        "password": "123456",
        "image": "lien"
    }
```

#### Supprimer un utilisateur

```http
  DELETE /users/users-list/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id d'utilisateur |


## La stack technique

**Serveur :** Node.js

**Framework :** Express.js

**Languages :** JavaScript, TypeScript