/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainContainerService } from './main-container.service';

describe('Service: MainContainer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainContainerService]
    });
  });

  it('should ...', inject([MainContainerService], (service: MainContainerService) => {
    expect(service).toBeTruthy();
  }));
});
