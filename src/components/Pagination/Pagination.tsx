import ReactPaginate from "react-paginate";
import { PaginationArrow } from "../../assets/svg";
import "./Pagination.scss";

export interface IProps {
  handlePageClick: (event: any) => void;
  pageCount: number;
}

export const Pagination: React.FC<IProps> = ({
  handlePageClick,
  pageCount,
}) => {
  return (
    <ReactPaginate
      containerClassName="pagination"
      pageClassName="pagination__page"
      activeClassName="pagination__page--active"
      previousClassName="pagination__prev"
      nextClassName="pagination__next"
      breakClassName="pagination__break"
      breakLabel="..."
      nextLabel={<PaginationArrow />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<PaginationArrow />}
      renderOnZeroPageCount={null}
    />
  );
};
