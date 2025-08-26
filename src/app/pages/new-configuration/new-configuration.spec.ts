import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConfiguration } from './new-configuration';

describe('NewConfiguration', () => {
  let component: NewConfiguration;
  let fixture: ComponentFixture<NewConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
