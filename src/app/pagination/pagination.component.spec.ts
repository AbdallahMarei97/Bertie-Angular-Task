import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;

  beforeEach(() => {
    component = new PaginationComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should get the number of pages', () => {
      component.ngOnInit()

      const pages = component.range(1, 5);
      expect(pages).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
