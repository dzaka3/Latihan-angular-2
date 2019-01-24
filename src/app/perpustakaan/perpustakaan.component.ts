import { Component, OnInit } from '@angular/core';
import { Perpus } from "./perpustakaan.models";

@Component({
  selector: 'app-perpustakaan',
  templateUrl: './perpustakaan.component.html',
  styleUrls: ['./perpustakaan.component.css']
})
export class PerpustakaanComponent implements OnInit {
  bukuList: Perpus[] = [];
  bukuEdit: Perpus = new Perpus();

  constructor() { }

  ngOnInit() {
  }

  onBukuAdded(bukuInfo: Perpus) {
    console.log(bukuInfo);
    this.bukuList.push(bukuInfo);
  }

  onBukuEdit(bukuInfo: Perpus){
    console.log(bukuInfo);
    this.bukuEdit = bukuInfo;
  }
}
