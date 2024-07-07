import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateGallery = () => {
    const [currentItem, setCurrentItem] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          image: null,
        },
        onSubmit: async (values, { resetForm }) => {
            if (values.image) {
                const cloudFormData = new FormData();
                cloudFormData.append('file', values.image);
                cloudFormData.append('upload_preset', 'ml_default');
                try {
                      const uploadRes = await axios.post(`https://api.cloudinary.com/v1_1/dg28bvc8m/image/upload`, cloudFormData);
                      await axios.put("https://order-back-44f875a7dfd3.herokuapp.com/gallery/update", {id,imageUrl: uploadRes.data.secure_url})
                }
                catch (e) {
                  alert(e)
                }
            }
            navigate("/056a714003858955")
         
        }})
    async function getPhoto() {
        try {
          const res = await axios.get(`https://order-back-44f875a7dfd3.herokuapp.com/gallery/${id}`);
          setCurrentItem(res.data);
        }
        catch (e) {
          alert(e)
          navigate("/056a714003858955")
        }
      }
    
      useEffect(() => {
        getPhoto()
      }, [id])
    
      const handleFileChange = (event) => {
        const file = event.target.files ? event.target.files[0] : null;
        formik.setFieldValue("image", file);
      };
    return (
        <div className='update-gallery'>
            <h1>Update photo</h1>
            <span>Current photo:</span>
            <img src={currentItem?.url} style={{width:"200px", height:"200px", margin:"20px"}}/>
            <form onSubmit={formik.handleSubmit}>
                <label>New photo:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                />
                {formik.touched.image && formik.errors.image ? (
                    <div className="error-message">{formik.errors.image}</div>
                ) : null}
                <div className='btns-wrapper'>
                  <button type='submit' className='submit-btn'>OK</button>
                  <button onClick={() => navigate("/056a714003858955")}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateGallery;