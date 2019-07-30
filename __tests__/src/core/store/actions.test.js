import { searchBY, sortBY, updSearchTerm } from '../../../../src/core/store/actions';

describe('actions', () => {
  it('searchBy', () => {
    const value = 'title';
    const expectedAction = {
      type: 'SEARCH_BY',
      payload: value,
    };

    expect(searchBY(value)).toEqual(expectedAction);
  });

  it('sortBy', () => {
    const value = 'released_date';
    const expectedAction = {
      type: 'SORT_BY',
      payload: value,
    };

    expect(sortBY(value)).toEqual(expectedAction);
  });

  it('searchTerm', () => {
    const value = 'Matrix';
    const expectedAction = {
      type: 'UPDATE_SEARCH_TERM',
      payload: value,
    };

    expect(updSearchTerm(value)).toEqual(expectedAction);
  });
});
