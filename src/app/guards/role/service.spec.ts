import { TestBed } from '@angular/core/testing';

import { RoleGuard } from './service';

describe('RoleGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleGuard = TestBed.get(RoleGuard);
    expect(service).toBeTruthy();
  });
});
