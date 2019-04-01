import { OrderViewModule } from './order-view.module';

describe('OrderViewModule', () => {
  let orderViewModule: OrderViewModule;

  beforeEach(() => {
    orderViewModule = new OrderViewModule();
  });

  it('should create an instance', () => {
    expect(orderViewModule).toBeTruthy();
  });
});
