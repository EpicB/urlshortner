import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortnerpageComponent } from './shortnerpage.component';

describe('ShortnerpageComponent', () => {
  let component: ShortnerpageComponent;
  let fixture: ComponentFixture<ShortnerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortnerpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortnerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
