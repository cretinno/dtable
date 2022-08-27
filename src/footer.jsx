import React from 'react'
import { Link } from 'react-router-dom';
import func from './func';
function Footer(props) {
    const { setParentState, parentState, pageSizeList = [10, 25, 50, 'All'] } = props;
    const { currentPage, totalPage, pageSize, pagingList } = parentState.pagination;
    const _handlePageSize = ({ target: { value } }) => {
        setParentState(prevState => {
            const entries = !!value && !isNaN(value) ? parseInt(value, 10) : prevState.filteredList.length;
            return {
                ...prevState, pagination: {
                    currentPage: 1,
                    totalPage: Math.ceil(prevState.filteredList.length / entries),
                    pageSize: entries,
                    pagingList: func._generatePaginationList(1, Math.ceil(prevState.filteredList.length / entries))
                }
            };
        });
    }
    const _handlePageChange = (event, page) => {
        event.preventDefault();
        setParentState(prevState => {
            let tempPaginate = { ...prevState.pagination };
            if (page === 'Previous')
                tempPaginate.currentPage = prevState.pagination.currentPage - 1;
            else if (page === 'Next')
                tempPaginate.currentPage = prevState.pagination.currentPage + 1;
            else
                tempPaginate.currentPage = page;
            tempPaginate.pagingList = func._generatePaginationList(tempPaginate.currentPage, tempPaginate.totalPage)
            return { ...prevState, pagination: tempPaginate }
        })
    }
    return <div className="row">
        <div className="col-sm-12 col-md-5">
            <div className="dataTables_info">
                Showing {((currentPage - 1) * pageSize) + 1} to {currentPage === totalPage ? parentState.filteredList.length : currentPage * pageSize} of {parentState.filteredList.length} rows
                <label className='ml-1'>
                    <select className="custom-select custom-select-sm form-control w-50" value={pageSize} onChange={_handlePageSize}>
                        {pageSizeList.map((title, index) => <option value={title.toString().toLowerCase()} key={index}>{title}</option>)}
                    </select> rows/page
                </label>
            </div>
        </div>
        <div className="col-sm-12 col-md-7">
            {totalPage >= 2 &&
                <div className="dataTables_paginate paging_simple_numbers">
                    <ul className="pagination">
                        {pagingList.map((title, index) => {
                            let isDisabled = (title === 'Previous' && currentPage === 1) || (title === 'Next' && totalPage === currentPage) || title === '...';
                            return <li key={index} className={`paginate_button page-item${isDisabled ? ' disabled' : ''}${currentPage === title ? ' active' : ''}`}>
                                <Link to="#" onClick={(event) => !isDisabled && currentPage !== title ? _handlePageChange(event, title) : false} tabIndex="0" className="page-link">{title}</Link>
                            </li>
                        })}
                    </ul>
                </div>
            }
        </div>
    </div>
}
export default Footer;