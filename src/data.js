const TableData = [
    { name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: '33', startDate: '2008/11/28', salary: '$162,700' },
    { name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: '66', startDate: '2009/01/12', salary: '$86,000' },
    { name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: '41', startDate: '2012/10/13', salary: '$132,000' },
    { name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: '61', startDate: '2012/12/02', salary: '$372,000' },
    { name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: '22', startDate: '2012/03/29', salary: '$433,060' },
    { name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', age: '36', startDate: '2008/10/16', salary: '$470,600' },
    { name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: '39', startDate: '2009/09/15', salary: '$205,500' },
    { name: 'Dai Rios', position: 'Personnel Lead', office: 'Edinburgh', age: '35', startDate: '2012/09/26', salary: '$217,500' },
    { name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: '63', startDate: '2011/07/25', salary: '$170,750' },
    { name: 'Gloria Little', position: 'Systems Administrator', office: 'New York', age: '59', startDate: '2009/04/10', salary: '$237,500' },
    { name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: '30', startDate: '2008/12/19', salary: '$90,560' },
    { name: 'Quinn Flynn', position: 'Support Lead', office: 'Edinburgh', age: '22', startDate: '2013/03/03', salary: '$342,000' },
    { name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', age: '36', startDate: '2008/10/16', salary: '$470,600' },
    { name: 'Haley Kennedy', position: 'Senior Marketing Designer', office: 'London', age: '43', startDate: '2012/12/18', salary: '$313,500' },
    { name: 'Tatyana Fitzpatrick', position: 'Regional Director', office: 'London', age: '19', startDate: '2010/03/17', salary: '$385,750' },
    { name: 'Michael Silva', position: 'Marketing Designer', office: 'London', age: '66', startDate: '2012/11/27', salary: '$198,500' },
    { name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', office: 'New York', age: '64', startDate: '2010/06/09', salary: '$725,000' },
    { name: 'Gloria Little', position: 'Systems Administrator', office: 'New York', age: '59', startDate: '2009/04/10', salary: '$237,500' },
    { name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: '41', startDate: '2012/10/13', salary: '$132,000' },
    { name: 'Dai Rios', position: 'Personnel Lead', office: 'Edinburgh', age: '35', startDate: '2012/09/26', salary: '$217,500' },
    { name: 'Jenette Caldwell', position: 'Development Lead', office: 'New York', age: '30', startDate: '2011/09/03', salary: '$345,000' },
    { name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', office: 'New York', age: '40', startDate: '2009/06/25', salary: '$675,000' },
];
const TableColumn = [
    { target: 'id', type: 'selectRow' },
    { title: 'Name', target: 'name', type: 'default' },
    { title: 'Position', target: 'position', type: 'default' },
    { title: 'Office', target: 'office', type: 'default' },
    { title: 'Age', target: 'age', type: 'default' },
    { title: 'Start Date', target: 'startDate', type: 'default' },
    { title: 'Salary', target: 'salary', type: 'default' },
];
const data = { TableData, TableColumn };
export default data;