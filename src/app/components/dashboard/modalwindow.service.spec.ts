import { TestBed, inject } from '@angular/core/testing';

import { ModalwindowService } from './modalwindow.service';

describe('ModalwindowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalwindowService]
    });
  });

  it('should be created', inject([ModalwindowService], (service: ModalwindowService) => {
    expect(service).toBeTruthy();
  }));
});
