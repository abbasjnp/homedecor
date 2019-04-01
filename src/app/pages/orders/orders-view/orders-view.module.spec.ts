import { OrdersViewModule } from './orders-view.module';

describe('OrdersViewModule', () => {
  let ordersViewModule: OrdersViewModule;

  beforeEach(() => {
    ordersViewModule = new OrdersViewModule();
  });

  it('should create an instance', () => {
    expect(ordersViewModule).toBeTruthy();
  });
});
