import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PerpustakaanComponent } from './perpustakaan/perpustakaan.component';
import { TambahBukuComponent } from './perpustakaan/tambah-buku/tambah-buku.component';
import { DaftarBukuComponent } from './perpustakaan/daftar-buku/daftar-buku.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverHighlightDirective,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    PerpustakaanComponent,
    TambahBukuComponent,
    DaftarBukuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
