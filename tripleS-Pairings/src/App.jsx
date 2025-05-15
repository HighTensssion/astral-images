import React from 'react';
import Table from './components/Table';
import './styles/App.css';
import tableData from './data/tableData.json';

const App = () => {
    const columns = tableData.columns;
    const data = tableData.data;

    console.log('Imported  tableData:', tableData);
    console.log('Columns:', columns);
    console.log('Data:', data);

    return (
        <div className="App">
            <Table data={data} columns={columns} />
        </div>
    );
};

export default App;