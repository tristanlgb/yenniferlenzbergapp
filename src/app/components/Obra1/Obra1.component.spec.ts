import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra1Component } from './Obra1.component';

describe('Obra1Component', () => {
  let component: Obra1Component;
  let fixture: ComponentFixture<Obra1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obra1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Obra1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
