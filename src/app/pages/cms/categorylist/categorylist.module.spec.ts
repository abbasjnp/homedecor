import { CategorylistModule } from './categorylist.module';

describe('CategorylistModule', () => {
  let categorylistModule: CategorylistModule;

  beforeEach(() => {
    categorylistModule = new CategorylistModule();
  });

  it('should create an instance', () => {
    expect(categorylistModule).toBeTruthy();
  });
});
