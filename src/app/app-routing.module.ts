import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { PessoaCreateComponent } from './components/views/pessoa/pessoa-create/pessoa-create.component';
import { PessoaDeleteComponent } from './components/views/pessoa/pessoa-delete/pessoa-delete.component';
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';
import { PessoaUpdateComponent } from './components/views/pessoa/pessoa-update/pessoa-update.component';
import { ProcessoCreateComponent } from './components/views/processo/processo-create/processo-create.component';
import { ProcessoDeleteComponent } from './components/views/processo/processo-delete/processo-delete.component';
import { ProcessoReadComponent } from './components/views/processo/processo-read/processo-read.component';
import { ProcessoViewComponent } from './components/views/processo/processo-view/processo-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pessoas',
    component: PessoaReadComponent
  },
  {
    path: 'pessoas/create',
    component: PessoaCreateComponent
  },
  {
    path: 'pessoas/delete/:id',
    component: PessoaDeleteComponent
  },
  {
    path: 'pessoas/update/:id',
    component: PessoaUpdateComponent
  },
  {
    path: 'processos',
    component: ProcessoReadComponent
  },
  {
    path: 'processos/create',
    component: ProcessoCreateComponent
  },
  {
    path: 'processos/delete/:id',
    component: ProcessoDeleteComponent
  },
  {
    path: 'processos/view/:id',
    component: ProcessoViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
