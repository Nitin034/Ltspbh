'use clinte'

import React, { useState, useEffect } from 'react';
import { UploadImage, DeleteImage } from '@/helpers/upload-image'; // Import cloudinary functions
import axios from 'axios';

const FrontendComponent = () => {
    const [topperName, setTopperName] = useState('');
    const [someText, setSomeText] = useState('');
    const [topperImage, setTopperImage] = useState(null);
    const [toppers, setToppers] = useState([]);

    // Function to fetch topper data
    const fetchTopperData = async () => {
        try {
            const response = await axios.get('/api/toppers');
            setToppers(response.data);
        } catch (error) {
            console.error('Error fetching topper data:', error);
        }
    };

    // Function to delete topper data
    const deleteTopperData = async (topperId: any) => {
        try {
            await axios.delete(`/api/toppers/${topperId}`);
            // Fetch updated topper data after deletion
            fetchTopperData();
        } catch (error) {
            console.error('Error deleting topper data:', error);
        }
    };

    useEffect(() => {
        // Fetch initial topper data
        fetchTopperData();
    }, []);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Upload image to Cloudinary
            const { secure_url, public_id } = await UploadImage(topperImage, 'toppers');
            // Send form data to backend
            await axios.post('/api/toppers', {
                topperName,
                someText,
                toper_Image: secure_url,
                public_id,
            });
            // Fetch updated topper data after submission
            fetchTopperData();
        } catch (error) {
            console.error('Error uploading image or submitting form:', error);
        }
    };

    return (
        <div>
            <h1>Topper Section</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Topper Name" value={topperName} onChange={(e) => setTopperName(e.target.value)} />
                <input type="text" placeholder="Some Text" value={someText} onChange={(e) => setSomeText(e.target.value)} />
                <input type="file" onChange={(e) => setTopperImage(e.target.files[0])} />
                <button type="submit">Submit</button>
            </form>
            <h2>Topper List</h2>
            <ul>
                {toppers.map((topper) => (
                    <li key={topper._id}>
                        <p>{topper.topperName}</p>
                        <p>{topper.someText}</p>
                        <img src={topper.toper_Image} alt="Topper" />
                        <button onClick={() => deleteTopperData(topper._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FrontendComponent;
