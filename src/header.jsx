import React from 'react';
function Header(props) {
    const { setParentState, initialDataList, initPagination, defaultPageSize, tableColumn, handleAdd = null } = props;
    const _handleSearch = ({ target: { value } }) => {
        setParentState(prevState => {
            const tempList = !!value ? initialDataList.filter(dt => !!tableColumn.find(cl => !!cl.title && dt[cl.target].indexOf(value) !== -1)) : initialDataList;
            let tempPaginate = { ...initPagination };
            tempPaginate.totalPage = Math.ceil(tempList.length / defaultPageSize)
            return { ...prevState, searchText: value, filteredList: [...tempList], pagination: tempPaginate, selectedRows: [] };
        })
    }
    return <div className={`row top-header${!!tableColumn && tableColumn.length !== 0 ? '' : ' mb-3'}`}>
        <div className="col-md-3">
            {!!initialDataList && initialDataList.length !== 0 &&
                <input type="search" className="form-control" placeholder="Search" onChange={_handleSearch} />
            }
        </div>
        <div className="col-md-9">
            <div className="btn-group">
                {!!handleAdd &&
                    <button onClick={handleAdd} className="btn btn-outline-primary" type="button" title="Add New Record">
                        <i className="fa fa-plus"></i>&nbsp;Add
                    </button>
                }
                {/* <button className="btn btn-outline-primary" type="button" title="Refresh">
                    <i className="fa fa-refresh"></i>
                </button>
                <div className="keep-open btn-group" title="Columns">
                    <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" title="Columns">
                        <i className="fa fa-list"></i>
                        <span className="caret"></span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <label className="dropdown-item dropdown-item-marker">
                            <input type="checkbox" className="toggle-all" />&nbsp;
                            <span>Toggle all</span>
                        </label>
                        <div className="dropdown-divider"></div>
                        <label className="dropdown-item dropdown-item-marker">
                            <input type="checkbox" data-field="id" value="1" />&nbsp;
                            <span>Item ID</span>
                        </label>
                        <label className="dropdown-item dropdown-item-marker">
                            <input type="checkbox" data-field="name" value="2" />&nbsp;
                            <span>Item Name</span>
                        </label>
                        <label className="dropdown-item dropdown-item-marker">
                            <input type="checkbox" data-field="price" value="3" />&nbsp;
                            <span>Item Price</span>
                        </label>
                        <label className="dropdown-item dropdown-item-marker">
                            <input type="checkbox" data-field="operate" value="4" />&nbsp;
                            <span>Item Operate</span>
                        </label>
                    </div>
                </div>
                <div className="export btn-group">
                    <button className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" type="button" title="Export data">
                        <i className="fa fa-download"></i>
                        <span className="caret"></span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#" data-type="json">JSON</a>
                        <a className="dropdown-item" href="#" data-type="xml">XML</a>
                        <a className="dropdown-item" href="#" data-type="csv">CSV</a>
                        <a className="dropdown-item" href="#" data-type="txt">TXT</a>
                        <a className="dropdown-item" href="#" data-type="sql">Copy</a>
                        <a className="dropdown-item" href="#" data-type="excel">MS Excel</a>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
}
export default Header;