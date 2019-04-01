import { CategoryListsModule } from './category-lists.module';

describe('CategoryListsModule', () => {
  let categoryListsModule: CategoryListsModule;

  beforeEach(() => {
    categoryListsModule = new CategoryListsModule();
  });

  it('should create an instance', () => {
    expect(categoryListsModule).toBeTruthy();
  });
});
