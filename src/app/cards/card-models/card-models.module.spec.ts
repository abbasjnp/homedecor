import { CardModelsModule } from './card-models.module';

describe('CardModelsModule', () => {
  let cardModelsModule: CardModelsModule;

  beforeEach(() => {
    cardModelsModule = new CardModelsModule();
  });

  it('should create an instance', () => {
    expect(cardModelsModule).toBeTruthy();
  });
});
