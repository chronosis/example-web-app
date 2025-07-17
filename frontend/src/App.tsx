import React from 'react';
import ExampleComponent from './components/ExampleComponent';
import ExampleDataFetcher from './components/ExampleDataFetcher';

const App: React.FC = () => {
    return (
        <div>
            <h1>My Fullstack App</h1>
            <ExampleComponent />
            <ExampleDataFetcher />
        </div>
    );
};

export default App;