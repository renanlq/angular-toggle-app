# ToggleApp

Projeto para controle de feature flags/toggle, em versão do Angular 7.0.2.

## Passos

* cmd: _npm install -g @angular/cli_
* cmd: _ng new name-app --scss --routing_
* cmd: _ng add @angular/material_
* cmd: _ng generate @angular/material:material-nav --name="app-nav"_
  * add <app-nav></app-nav> to app.component.html
* cmd: _ng generate @angular/material:material-table --name=“list-apps”_
  * add <app-table></app-table> to app-nav.component.html
* cmd: _ng add @angular/pwa_
* cmd: _npm install lite-server --save-dev_
  * add "start:prod": "ng build --prod && lite-server --baseDir dist/toggle-app", to package.json
  * cmd: _npm run start:prod_

## Pré-requisitos

* [Angular CLI](https://www.npmjs.com/package/@angular/cli)

## Dependências

* [Angular CDK](https://www.npmjs.com/package/@angular/cdk)
* [Angular Material](https://www.npmjs.com/package/@angular/material)
* [Angular PWA](https://www.npmjs.com/package/@angular/pwa?activeTab=dependencies)
* [Angular Service Worker](https://www.npmjs.com/package/@angular/service-worker)
* [Lite Server](https://www.npmjs.com/package/lite-server)
