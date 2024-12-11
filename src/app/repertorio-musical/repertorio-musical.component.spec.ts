import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertorioMusicalComponent } from './repertorio-musical.component';

describe('RepertorioMusicalComponent', () => {
  let component: RepertorioMusicalComponent;
  let fixture: ComponentFixture<RepertorioMusicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepertorioMusicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepertorioMusicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
