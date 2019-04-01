import { InfoCardModule } from './info-card.module';

describe('InfoCardModule', () => {
  let infoCardModule: InfoCardModule;

  beforeEach(() => {
    infoCardModule = new InfoCardModule();
  });

  it('should create an instance', () => {
    expect(infoCardModule).toBeTruthy();
  });
});
