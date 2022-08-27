import React from 'react';
function NoData({ columnLength }) {
    return <tr className='no-data'>
        <td colSpan={columnLength}>
            <p>
                <i className="fa fa-exclamation-circle"></i>
                <span className='ml-2'>No data found!</span>
            </p>
        </td>
    </tr>
}
function Cell(props) {
    const { isSelected, col: { target, type }, row, colIndex, rowIndex, setParentState } = props;
    const { _objectId } = row;
    const _handleSelectRow = ({ checked }, objectId) => setParentState(prevState => {
        let tempList = [...prevState.selectedRows];
        const findIndex = tempList.indexOf(objectId);
        if (!!checked) {
            if (findIndex === -1)
                tempList.push(objectId);
        } else {
            const findIndex = tempList.indexOf(objectId);
            if (findIndex !== -1)
                tempList.splice(findIndex, 1);
        }
        return { ...prevState, selectedRows: tempList }
    })
    switch (type) {
        case 'selectRow':
            return <td key={`${rowIndex}.${colIndex}`} className="dt-body-center">
                <input type="checkbox" checked={isSelected} onChange={({ target }) => _handleSelectRow(target, _objectId)} />
            </td>
        default:
            return <td key={`${rowIndex}.${colIndex}`}>{row[target]}</td>
    }
}
function Tbody(props) {
    const { parentState: { selectedRows }, dataList, tableColumn } = props;
    return <tbody>
        {dataList.length !== 0 ? dataList.map((row, rowIndex) => {
            const isSelected = selectedRows.indexOf(row._objectId) !== -1;
            return <tr className={`${rowIndex % 2 === 0 ? "even" : "odd"}${isSelected ? ' selected' : ''}`} key={rowIndex}>
                {tableColumn.map((col, colIndex) => <Cell {...{ ...props, col, row, colIndex, rowIndex, isSelected }} />)}
            </tr>
        }) : <NoData columnLength={tableColumn.length} />}
    </tbody>
}
export default Tbody;