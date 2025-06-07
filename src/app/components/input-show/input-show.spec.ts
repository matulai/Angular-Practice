import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputShow } from './input-show';

describe('InputShow', () => {
  let component: InputShow;
  let fixture: ComponentFixture<InputShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputShow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
