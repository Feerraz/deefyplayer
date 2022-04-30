import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproduzirMusicaComponent } from './reproduzir-musica.component';

describe('ReproduzirMusicaComponent', () => {
  let component: ReproduzirMusicaComponent;
  let fixture: ComponentFixture<ReproduzirMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReproduzirMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproduzirMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
