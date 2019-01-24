import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {HeaderComponent} from "./header/header.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {PerpustakaanComponent} from "./perpustakaan/perpustakaan.component";
import {TambahBukuComponent} from "./perpustakaan/tambah-buku/tambah-buku.component";
import {DaftarBukuComponent} from "./perpustakaan/daftar-buku/daftar-buku.component";


//routes adalah variabel
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '404', component:PageNotFoundComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'perpustakaan', component:PerpustakaanComponent},
  {path: 'tambah-buku', component:TambahBukuComponent},
  {path: 'daftar-buku', component:DaftarBukuComponent}

  ];

@NgModule({
  // untuk mendaftarkan path ke router model
  imports: [RouterModule.forRoot(routes)],
  //agar path bisa diakses dari mana saja
  exports: [RouterModule]
})
export class AppRoutingModule { }
