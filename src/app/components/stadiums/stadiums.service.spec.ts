import { TestBed, inject } from '@angular/core/testing';

import { StadiumsService } from './stadiums.service';

describe('StadiumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StadiumsService]
    });
  });

  it('should be created', inject([StadiumsService], (service: StadiumsService) => {
    expect(service).toBeTruthy();
  }));
});
