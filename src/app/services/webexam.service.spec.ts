import { TestBed, inject } from '@angular/core/testing';

import { WebexamService } from './webexam.service';

describe('WebexamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebexamService]
    });
  });

  it('should be created', inject([WebexamService], (service: WebexamService) => {
    expect(service).toBeTruthy();
  }));
});
