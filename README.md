# ToggleApp

Projeto para controle de feature flags/toggle, em versão do Angular 7.0.2.

## Passos

1. npm install -g @angular/cli
2. ng new name-app --scss --routing
3. ng add @angular/material
4. ng generate @angular/material:material-nav --name="app-nav"
4.1. add <app-nav></app-nav> to app.component.html
5. ng generate @angular/material:material-table --name=“list-apps”
5.1. add <app-table></app-table> to app-nav.component.html
6. ng add @angular/pwa
7. npm install lite-server --save-dev
7.1. add "start:prod": "ng build --prod && lite-server --baseDir dist/toggle-app", to package.json
7.2. npm run start:prod
