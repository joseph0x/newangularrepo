import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang9ComponentComponent } from './ang9-component.component';

describe('Ang9ComponentComponent', () => {
  let component: Ang9ComponentComponent;
  let fixture: ComponentFixture<Ang9ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ang9ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ang9ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
