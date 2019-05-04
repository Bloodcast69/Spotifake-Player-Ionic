import { TestBed } from '@angular/core/testing';

import { PlaylistService } from './playlist.service';

describe('PlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistService = TestBed.get(PlaylistService);
    expect(service).toBeTruthy();
  });
});
