import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietalComponent } from './varietal.component';

describe('VarietalComponent', () => {
  let component: VarietalComponent;
  let fixture: ComponentFixture<VarietalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarietalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
