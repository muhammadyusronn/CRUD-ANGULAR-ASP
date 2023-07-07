import { TestBed } from '@angular/core/testing';

import { JenisTransaksiService } from './jenis-transaksi.service';

describe('JenisTransaksiService', () => {
  let service: JenisTransaksiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JenisTransaksiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
