/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TMNTService } from './tmnt.service';

describe('TMNTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TMNTService]
    });
  });

  it('should ...', inject([TMNTService], (service: TMNTService) => {
    expect(service).toBeTruthy();
  }));
});
