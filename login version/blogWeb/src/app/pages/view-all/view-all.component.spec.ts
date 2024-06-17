import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllComponent } from './view-all.component';

describe('ViewAll2Component', () => {
  let component: ViewAllComponent;
  let fixture: ComponentFixture<ViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
