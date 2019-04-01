import { CmstabelModule } from './cmstabel.module';

describe('CmstabelModule', () => {
  let cmstabelModule: CmstabelModule;

  beforeEach(() => {
    cmstabelModule = new CmstabelModule();
  });

  it('should create an instance', () => {
    expect(cmstabelModule).toBeTruthy();
  });
});
