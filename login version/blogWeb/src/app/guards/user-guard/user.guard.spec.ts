import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { UserGuard } from './user.guard';

describe('UserGuard', () => {
  let userGuard: UserGuard;
  const executeGuard: CanActivateFn = (...guardParameters) => 
      userGuard.canActivate(...guardParameters);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGuard],
    });

    userGuard = TestBed.inject(UserGuard);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});