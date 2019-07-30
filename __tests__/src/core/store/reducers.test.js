import rootReducer from '../../../../src/core/store/reducers';

describe('Reducers', () => {
  it('Initial State', () => {
    const initialState = {
      searchBy: 'title',
      sortBy: 'release_date',
      searchTerm: '',
    };
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle searchBy', () => {
    expect(rootReducer([], {
      type: 'SEARCH_BY',
      payload: 'title',
    })).toEqual({
      searchBy: 'title',
    });
  });

  it('should handle sortBy', () => {
    expect(rootReducer([], {
      type: 'SORT_BY',
      payload: 'release_date',
    })).toEqual({
      sortBy: 'release_date',
    });
  });

  it('should handle searchTerm', () => {
    expect(rootReducer([], {
      type: 'UPDATE_SEARCH_TERM',
      payload: 'Matrix',
    })).toEqual({
      searchTerm: 'Matrix',
    });
  });
});
