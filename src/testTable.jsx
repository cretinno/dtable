import React from 'react';
import DTable from './index';
import data from './data';
function TestTable() {
    return <div className='container'>
        <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">Data Table</h6>
                        <DTable
                            handleAdd={() => console.log('add')}
                            rowList={data.TableData}
                            colList={data.TableColumn}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default TestTable;