import React, { use, useEffect, useState } from 'react';

const useData = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/public/items.json")
        .then(res => res.json())
        .then(data => {
            setItem(data)
            setLoading(false)})
        .catch(error => {
            console.log(error.message)
            setLoading(false)})
    },[])

    return {item, loading};
};

export default useData;