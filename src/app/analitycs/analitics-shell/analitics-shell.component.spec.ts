import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliticsShellComponent } from './analitics-shell.component';

describe('AnaliticsShellComponent', () => {
  let component: AnaliticsShellComponent;
  let fixture: ComponentFixture<AnaliticsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaliticsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliticsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
