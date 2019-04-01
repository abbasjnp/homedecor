import { UsersDetailsModule } from './users-details.module';

describe('UsersDetailsModule', () => {
  let usersDetailsModule: UsersDetailsModule;

  beforeEach(() => {
    usersDetailsModule = new UsersDetailsModule();
  });

  it('should create an instance', () => {
    expect(usersDetailsModule).toBeTruthy();
  });
});
