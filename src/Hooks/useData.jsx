import React, { useEffect, useState } from 'react';

const useData = () => {

    const [item, setItem] = useState([]);
    const [category, setCategory] = useState([]);
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/public/items.json")
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("/public/Category.json")
            .then(res => res.json())
            .then(data => {
                setCategory(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("/public/Blog.json")
            .then(res => res.json())
            .then(data => {
                setBlog(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
                setLoading(false)
            })
    }, [])

    return { item, category, blog, loading };
};

export default useData;