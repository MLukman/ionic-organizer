import { TestBed } from '@angular/core/testing';

import { WaktuSolatService } from './waktu-solat.service';

describe('WaktuSolatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaktuSolatService = TestBed.get(WaktuSolatService);
    expect(service).toBeTruthy();
  });
});
