import { TestBed } from '@angular/core/testing';

import { IntellectService } from './intellect.service';

describe('IntellectService', () => {
  let service: IntellectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntellectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
