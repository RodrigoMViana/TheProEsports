import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CblolComponent } from './cblol.component';

describe('CblolComponent', () => {
  let component: CblolComponent;
  let fixture: ComponentFixture<CblolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CblolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CblolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
