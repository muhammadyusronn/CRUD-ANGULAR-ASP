import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JenisTransaksi } from 'src/app/models/jenistransaksi.model';
import { JenisTransaksiService } from 'src/app/services/jenis-transaksi.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-jenistransksi-list',
  templateUrl: './jenistransksi-list.component.html',
  styleUrls: ['./jenistransksi-list.component.css']
})
export class JenistransksiListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  jenis_transaksi : JenisTransaksi[] = [];

  constructor( private jtService: JenisTransaksiService, private router:Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.getAllJenisTransaksi()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      lengthMenu:['5','10','20'],
    };

  }
  getAllJenisTransaksi(){
    this.jtService.getAllJenisTransaksi().subscribe({
      next: (jenis_transaksi) => {
        this.jenis_transaksi = jenis_transaksi;
      },
      error: (response) =>{
        console.log(response)
      }
    });
  }
  deleteJenisTransaksi(id:string){
    this.jtService.deleteJenisTransaksi(id).subscribe({
      next:(response)=>{
        this.getAllJenisTransaksi()
        this.router.navigate(['jenistransaksi'])
      }
    })
  }

}
