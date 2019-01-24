import {  Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input  } from '@angular/core';
import {Perpus} from "../perpustakaan.models";

@Component({
  selector: 'app-tambah-buku',
  templateUrl: './tambah-buku.component.html',
  styleUrls: ['./tambah-buku.component.css']
})
export class TambahBukuComponent implements OnInit {
  @ViewChild('inputContact') inputContact: ElementRef;
  @Input() bukuEdit = Perpus;
  @Output() bukuAdded = new EventEmitter<Perpus> ();

  inputInfo = new Perpus();
  constructor() { }

  ngOnInit() {
  }

  tambahBuku(inputQty: HTMLInputElement) {
    // console.log(this.inputInfo);
    // console.log(inputEmail);
    // console.log(this.inputContact.nativeElement.value);
    this.bukuAdded.emit(this.inputInfo);
    this.inputInfo = new Perpus();
  }
}
