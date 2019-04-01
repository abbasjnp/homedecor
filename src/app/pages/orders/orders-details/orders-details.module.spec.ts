import { OrdersDetailsModule } from './orders-details.module';

describe('OrdersDetailsModule', () => {
  let ordersDetailsModule: OrdersDetailsModule;

  beforeEach(() => {
    ordersDetailsModule = new OrdersDetailsModule();
  });

  it('should create an instance', () => {
    expect(ordersDetailsModule).toBeTruthy();
  });
});
