export const getBooksAPI = async () => {
    const res = await fetch('http://192.168.1.84:4000/books');
    return await res.json();
}

export const addBookAPI = async (book) => {
    const res = await fetch('http://192.168.1.84:4000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    return await res.json();
}

export const updateBookAPI = async (book) => {
    const res = await fetch(`http://192.168.1.84:4000/books/${book._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    return await res.json();
}

export const deleteBookAPI = async (id) => {
    const res = await fetch(`http://192.168.1.84:4000/books/${id}`, { method: 'DELETE' });
    return await res.json();
}