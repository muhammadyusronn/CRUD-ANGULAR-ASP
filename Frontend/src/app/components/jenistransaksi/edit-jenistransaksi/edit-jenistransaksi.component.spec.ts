import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJenistransaksiComponent } from './edit-jenistransaksi.component';

describe('EditJenistransaksiComponent', () => {
  let component: EditJenistransaksiComponent;
  let fixture: ComponentFixture<EditJenistransaksiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditJenistransaksiComponent]
    });
    fixture = TestBed.createComponent(EditJenistransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
