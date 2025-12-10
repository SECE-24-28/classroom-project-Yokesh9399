import { useState } from 'react';
import { DataContext } from './context';

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;