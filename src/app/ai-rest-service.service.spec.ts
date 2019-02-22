import { TestBed, inject } from '@angular/core/testing';

import { AiRestServiceService } from './ai-rest-service.service';

describe('AiRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AiRestServiceService]
    });
  });

  it('should be created', inject([AiRestServiceService], (service: AiRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
