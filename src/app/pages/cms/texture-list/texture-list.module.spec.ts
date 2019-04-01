import { TextureListModule } from './texture-list.module';

describe('TextureListModule', () => {
  let textureListModule: TextureListModule;

  beforeEach(() => {
    textureListModule = new TextureListModule();
  });

  it('should create an instance', () => {
    expect(textureListModule).toBeTruthy();
  });
});
