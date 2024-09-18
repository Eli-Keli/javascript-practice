import { useEffect, useState } from 'react';

const FetchDataComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []); // Runs once when the component mounts

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {data && data.map((item) => <p key={item.id}>{item.title}</p>)}
        </div>
    );
};

export default FetchDataComponent;
