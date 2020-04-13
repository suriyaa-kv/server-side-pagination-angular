import { TestBed } from '@angular/core/testing';

import { EmpployeeService } from './empployee.service';

describe('EmpployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpployeeService = TestBed.get(EmpployeeService);
    expect(service).toBeTruthy();
  });
});
