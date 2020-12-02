# Modulo 04 - Desafio Final BACKEND

**Website** to allow the user to create, update, read and delete grades for students.

See the live version on [**Grades Website**](https://dashboard.heroku.com/apps/frontend-gradesapi)

### Installation

To install the website dependencies:

```sh
$ yarn
$ yarn start
```

### Package to Deploy React

I am using the **serve** package to deploy a react app to heroku.
I had to change the **package.json** to add this line of comand to make it possible.

```sh
"start": "serve -s build"
```
