import React, { useState } from 'react';

const AddForm = () => {
    const [formData, setFormData] = useState({
        img: '',
        name: '',
        price: '' ,
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://653ca44fd5d6790f5ec8213d.mockapi.io/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data berhasil ditambahkan:', data);
            // Reset formulir setelah berhasil ditambahkan
            
        })
        .catch(error => console.error('Error:', error));
    }


    return (

        <form onSubmit={handleSubmit} className='flex justify-center items-center h-screen'>
            <div className='w-96 p-5 text-center bg-red-300'>
                <h1 className='text-3xl mb-5'>Form Tambah Data</h1>
                <div className='mb-8 flex flex-row'>
                    <input
                        type='text'
                        placeholder='Masukkan link foto produk'
                        id='img'
                        name='img'
                        value={formData.img}
                        onChange={handleChange}
                        className='w-96 p-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-500'
                        required
                    />
                </div>
                <div className='mb-8 flex flex-row'>
                    <input
                        type='text'
                        placeholder='Masukkan nama produk'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full p-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-500'
                        required
                    />
                </div>
                <div className='mb-8 flex flex-row'>
                    <input
                        type='text'
                        placeholder='Masukkan harga produk'
                        id='price'
                        name='price'
                        value={formData.price}
                        onChange={handleChange}
                        className='w-full p-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-500'
                        required
                    />
                </div>
                <div className='mb-6 flex flex-row'>
                    <input
                        type='text'
                        placeholder='Masukkan kategori produk'
                        id='category'
                        name='category'
                        value={formData.category}
                        onChange={handleChange}
                        className='w-full p-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-500'
                        required
                    />
                </div>
                <button onClick={handleSubmit} type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                    Submit
                </button>
            </div>
        </form>
    );
}

export default AddForm;