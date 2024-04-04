import { useState } from 'react';

const INIT_PAGE = 1;

export function usePagination() {
  const [page, setPage] = useState(INIT_PAGE);

  const incPage = () => setPage((prev) => prev + 1);

  return { page, incPage };
}
