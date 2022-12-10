import { renderHook, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDebounce } from './useDebounce';

describe('useDebounce hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should return text debounce', async () => {
    const { result } = renderHook(() => useDebounce('Hello', 100));
    jest.runAllTimers();
    expect(result.current).toEqual('Hello');
  });
});
