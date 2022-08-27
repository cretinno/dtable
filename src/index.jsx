import React, { useState } from 'react';
import './styles/dataTables.bootstrap4.css';
import './styles/datatable.css';
import './styles/bootstrap.css';
import func from './func';
import Header from './header';
import Footer from './footer';
import Thead from './thead';
import Tbody from './tbody';
function DTable(props) {
    const { rowList = [], colList = [] } = props;
    const initialDataList = rowList.map((dt, index) => ({ ...dt, _objectId: index + 1 }));
    const defaultPageSize = 10;
    const initSort = ['name', 'asc'];
    const paginationTotalPage = Math.ceil(rowList.length / defaultPageSize);
    const initPagination = {
        currentPage: 1,
        totalPage: paginationTotalPage,
        pageSize: defaultPageSize,
        pagingList: func._generatePaginationList(1, paginationTotalPage)
    };
    const [state, setState] = useState({
        sort: [...initSort],
        searchText: '',
        filteredList: [...func._sortCollection(initialDataList, initSort[0])],
        pagination: { ...initPagination },
        selectedRows: []
    });
    const { currentPage, pageSize } = state.pagination;
    let dataList = state.filteredList.slice(currentPage === 1 ? 0 : (currentPage - 1) * pageSize, currentPage * pageSize);
    const commonProps = { ...props, tableColumn: colList, parentState: state, dataList, initialDataList: initialDataList, setParentState: setState }
    return <div className="table-responsive">
        <div className="dataTables_wrapper dt-bootstrap4 no-footer">
            <Header initPagination={initPagination} defaultPageSize={defaultPageSize} {...commonProps} />
            <div className="row">
                <div className="col-sm-12">
                    <table className="table dataTable no-footer table-hover">
                        <Thead {...commonProps} />
                        <Tbody {...commonProps} />
                    </table>
                </div>
            </div>
            {dataList.length !== 0 && <Footer {...commonProps} />}
        </div>
    </div>
}
export default DTable;