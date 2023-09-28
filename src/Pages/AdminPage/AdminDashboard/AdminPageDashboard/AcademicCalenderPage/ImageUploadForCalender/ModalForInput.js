import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ModalForInput = ({ onClose, onImageUpload }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleImageUpload = async () => {
        if (selectedImage) {
            try {
                const formData = new FormData();
                formData.append('image', selectedImage);

                const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`;
                fetch(url, {
                    method: "POST",
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgData => {
                        onImageUpload(imgData.data.display_url)
                        toast.success("Img processing completed")
                        setSelectedImage(null);
                    })
                    .catch(err => {
                        console.log(err)
                        toast.success("Img processing completed")
                    });


                // if (response.data && response.data.data && response.data.data.url) {
                //     onImageUpload(response.data.data.url);
                //     setSelectedImage(null);
                // }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded p-8 max-w-md">




                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-4"
                />
                <button
                    onClick={handleImageUpload}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Upload
                </button>

                <button onClick={onClose} className="bg-slate-400 px-5 py-1 rounded-lg mt-8">
                    Close
                </button>
            </div>

        </div>
    );
};

export default ModalForInput;