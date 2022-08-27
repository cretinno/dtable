import React from 'react';
import func from './func';
function Thead(props) {
    const { setParentState, parentState: { selectedRows, sort }, dataList, tableColumn, initialDataList } = props;
    const _handleSort = (columnName) => {
        if (!!dataList && dataList.length !== 0)
            setParentState(prevState => {
                const sortType = prevState.sort[0] === columnName ? (prevState.sort[1] === 'desc' ? 'asc' : 'desc') : 'desc';
                const tempList = func._sortCollection(prevState.filteredList, columnName, sortType);
                return { ...prevState, sort: [columnName, sortType], filteredList: tempList }
            })
        else return null;
    }
    const _handleSelectRow = isChecked => setParentState(prevState => ({ ...prevState, selectedRows: !!isChecked ? [...initialDataList.map(dt => dt._objectId)] : [] }));
    let [sortCol, sortType] = sort;
    return <thead>
        <tr>
            {tableColumn.map(({ title, target, type }, index) => {
                const thClassName = sortCol === target && (sortType === 'asc' || sortType === 'desc') ? `sorting sorting_${sortType}` : 'sorting';
                switch (type) {
                    case 'selectRow':
                        return <th key={index} className="dt-body-center">
                            <input type="checkbox" checked={selectedRows.length !== 0 && dataList.filter(dt => selectedRows.indexOf(dt._objectId) !== -1).length === dataList.length} onChange={event => _handleSelectRow(event.target.checked)} />
                        </th>
                    default:
                        return <th className={!!dataList && dataList.length !== 0 ? thClassName : ''} key={index} onClick={() => _handleSort(target)}>{title}</th>
                }
            })}
        </tr>
    </thead>
}
export default Thead;