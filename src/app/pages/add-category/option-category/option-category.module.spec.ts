import { OptionCategoryModule } from './option-category.module';

describe('OptionCategoryModule', () => {
  let optionCategoryModule: OptionCategoryModule;

  beforeEach(() => {
    optionCategoryModule = new OptionCategoryModule();
  });

  it('should create an instance', () => {
    expect(optionCategoryModule).toBeTruthy();
  });
});
