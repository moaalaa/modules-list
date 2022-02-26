import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesListItemComponent } from './modules-list-item.component';

describe('ModulesListItemComponent', () => {
  let component: ModulesListItemComponent;
  let fixture: ComponentFixture<ModulesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
