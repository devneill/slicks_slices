import React from 'react';
import { Link } from 'gatsby';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <div>
      <Link disabled={!hasPrevPage} to={`/${base}/${prevPage}`}>
        {' '}
        &#8592; Prev
      </Link>
      <Link disabled={!hasNextPage} to={`/${base}/${nextPage}`}>
        Next &#8594;
      </Link>
    </div>
  );
}
