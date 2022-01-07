/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FbServisService } from './fbServis.service';

describe('Service: FbServis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbServisService]
    });
  });

  it('should ...', inject([FbServisService], (service: FbServisService) => {
    expect(service).toBeTruthy();
  }));
});
