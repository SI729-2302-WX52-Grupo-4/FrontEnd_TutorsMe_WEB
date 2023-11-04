import { TestBed } from '@angular/core/testing';

import { ProfesoresFavService } from './profesores-fav.service';

describe('ProfesoresFavService', () => {
  let service: ProfesoresFavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesoresFavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
