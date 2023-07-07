import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JenisTransaksi } from 'src/app/models/jenistransaksi.model'; 
import { JenisTransaksiService } from 'src/app/services/jenis-transaksi.service';


@Component({
  selector: 'app-add-jenistransaksi',
  templateUrl: './add-jenistransaksi.component.html',
  styleUrls: ['./add-jenistransaksi.component.css']
})
export class AddJenistransaksiComponent implements OnInit{
  addJsReq : JenisTransaksi = {
    id:'',
    nama:'',
    tipe:'',
    kode_transaksi:''
  }
  constructor(private jtServices:JenisTransaksiService, private router:Router){}
  ngOnInit(): void {
    
  }
  addJenisTransaksi(){
    this.jtServices.addJenisTransaksi(this.addJsReq).subscribe({
      next:(JenisTransaksi)=>{
        this.router.navigate(['jenistransaksi']);
      }
    })
  }
}
