import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JenisTransaksi } from 'src/app/models/jenistransaksi.model';
import { JenisTransaksiService } from 'src/app/services/jenis-transaksi.service';

@Component({
  selector: 'app-edit-jenistransaksi',
  templateUrl: './edit-jenistransaksi.component.html',
  styleUrls: ['./edit-jenistransaksi.component.css']
})
export class EditJenistransaksiComponent implements OnInit {
  jt:JenisTransaksi = {
    id:'',
    nama:'',
    tipe:'',
    kode_transaksi:''
  }
  constructor(private route:ActivatedRoute, private jtServices:JenisTransaksiService, private router:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id')
        if(id){
          this.jtServices.getJenisTransaksiByID(id).subscribe({
            next: (response) =>{
              this.jt = response;
            }
          })

        }
      }
    })
  }

  updateJenisTransaksi(){
    this.jtServices.updateJenisTransaksi(this.jt.id, this.jt).subscribe({
      next:(response)=>{
        this.router.navigate(['jenistransaksi'])
      }
    })
  }
}
