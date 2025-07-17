import React, { useEffect, useState } from 'react';

type ExampleData = {
    message: string;
    // Add other fields as needed
};

const ExampleDataFetcher: React.FC = () => {
    const [data, setData] = useState<ExampleData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/example')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Example Data</h2>
            <ul>
                {JSON.stringify(data)}
            </ul>
        </div>
    );
};

export default ExampleDataFetcher;