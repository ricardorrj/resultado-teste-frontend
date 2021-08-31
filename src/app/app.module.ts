import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PessoaCreateComponent } from './components/views/pessoa/pessoa-create/pessoa-create.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PessoaDeleteComponent } from './components/views/pessoa/pessoa-delete/pessoa-delete.component';
import { PessoaUpdateComponent } from './components/views/pessoa/pessoa-update/pessoa-update.component';
import { ProcessoReadComponent } from './components/views/processo/processo-read/processo-read.component';
import { ProcessoCreateComponent } from './components/views/processo/processo-create/processo-create.component';
import { MatSelectModule } from '@angular/material/select';
import { ProcessoDeleteComponent } from './components/views/processo/processo-delete/processo-delete.component';
import { ProcessoViewComponent } from './components/views/processo/processo-view/processo-view.component';
import { CpfPipe } from '../pipes/cpf.pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PessoaReadComponent,
    PessoaCreateComponent,
    PessoaDeleteComponent,
    PessoaUpdateComponent,
    ProcessoReadComponent,
    ProcessoCreateComponent,
    ProcessoDeleteComponent,
    ProcessoViewComponent,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
