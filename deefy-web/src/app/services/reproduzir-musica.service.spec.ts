import { TestBed } from '@angular/core/testing';

import { ReproduzirMusicaService } from './reproduzir-musica.service';

describe('ReproduzirMusicaService', () => {
  let service: ReproduzirMusicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReproduzirMusicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
