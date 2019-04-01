import { AddModelModule } from './add-model.module';

describe('AddModelModule', () => {
  let addModelModule: AddModelModule;

  beforeEach(() => {
    addModelModule = new AddModelModule();
  });

  it('should create an instance', () => {
    expect(addModelModule).toBeTruthy();
  });
});
