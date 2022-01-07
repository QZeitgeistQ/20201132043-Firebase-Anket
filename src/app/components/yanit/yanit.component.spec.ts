import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YanitComponent } from './yanit.component';

describe('YanitComponent', () => {
  let component: YanitComponent;
  let fixture: ComponentFixture<YanitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YanitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YanitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
