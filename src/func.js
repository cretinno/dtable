const _debounce = (func, delay) => {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
};
const _generatePaginationList = (currentPage, totalPage) => {
    let pagingList = [];
    if (totalPage <= 7)
        pagingList = _fillArray(totalPage)
    else {
        if (currentPage <= 3)
            pagingList = [..._fillArray(5), '...', totalPage]
        else if (currentPage >= totalPage - 3)
            pagingList = [1, '...', ..._fillArray(5, totalPage - 5)]
        else
            pagingList = [1, '...', ..._fillArray(3, currentPage - 2), '...', totalPage]
    }
    return ['Previous', ...pagingList, 'Next'];
}
const _fillArray = (N, start = 0) => Array.from({ length: N }, (_, index) => index + 1 + start);
const _sortCollection = (dataList, columnName, sortType = 'asc') => {
    return dataList.sort((data1, data2) => {
        let value1 = data1[columnName].toString().toLowerCase();
        let value2 = data2[columnName].toString().toLowerCase();
        if (value1 < value2) {
            return sortType === 'asc' ? -1 : 1;
        }
        if (value1 > value2) {
            return sortType === 'desc' ? -1 : 1;
        }
        return 0;
    });
}
const func = { _debounce, _fillArray, _generatePaginationList, _sortCollection }
export default func;