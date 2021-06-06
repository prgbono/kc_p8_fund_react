export const saleFilter = {
  all: { value: 'all', label: 'All' },
  sell: { value: 'sell', label: 'Sell' },
  buy: { value: 'buy', label: 'Buy' },
};

export const defaultFilters = {
  name: '',
  price: [],
  sale: saleFilter.all.value,
  tags: [],
};
