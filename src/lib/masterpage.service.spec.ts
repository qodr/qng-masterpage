import { TestBed, async } from '@angular/core/testing';

import { QNgMasterpageService } from './masterpage.service';

describe('MasterpageService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        QNgMasterpageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      //
    })
  });

  it('should be created', () => {
    const service: QNgMasterpageService = TestBed.get(QNgMasterpageService);
    expect(service).toBeTruthy();
  });
});
