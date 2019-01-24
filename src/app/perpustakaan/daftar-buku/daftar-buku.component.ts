import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Perpus} from "../perpustakaan.models";

@Component({
  selector: 'app-daftar-buku',
  templateUrl: './daftar-buku.component.html',
  styleUrls: ['./daftar-buku.component.css']
})
export class DaftarBukuComponent implements OnInit {
  @Output() dariChildKeParent: EventEmitter<Perpus> = new EventEmitter();
  @Input() bukuEditParent: Perpus[];
  @Input() bukuParent: Perpus[];
  constructor() { }

  ngOnInit() {
  }
  showname(idx: number) {
    this.dariChildKeParent.emit(this.bukuParent[idx]);
    // console.log(idx);
  }
}
