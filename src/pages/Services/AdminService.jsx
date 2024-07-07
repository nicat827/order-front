import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminServiceItem from './AdminServiceItem';
import "./index.scss"
const AdminService = () => {
    const [services,setServices] = useState([])
    async function getServices() {
        try {
          const res = await axios.get("https://order-back-44f875a7dfd3.herokuapp.com/services");
          setServices(res.data);
        }
        catch (e) {
          alert(e)
        }
        
      }
    
      useEffect(() => {
        getServices()
      }, [])
    return (
        <div className='service-wrapper'>
            {services.map(service => 
               <AdminServiceItem service={service}/>
            )}
        </div>
    );
}

export default AdminService;