import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenistransksiListComponent } from './jenistransksi-list.component';

describe('JenistransksiListComponent', () => {
  let component: JenistransksiListComponent;
  let fixture: ComponentFixture<JenistransksiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JenistransksiListComponent]
    });
    fixture = TestBed.createComponent(JenistransksiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
