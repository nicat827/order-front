import axios from 'axios';
import React, { useState } from 'react';
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from '@mui/material';

const AdminServiceItem = ({service}) => {
    const [showInput, setShowInput] = useState(false);
    const [showInput2, setShowInput2] = useState(false);
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")
    async function changePrice1(id) {
        try {
            
            if (value.length) {
                await axios.put("https://order-back-44f875a7dfd3.herokuapp.com/services", {id,price1:value})
                service.price1 = value;
                setValue("");
            }
            setShowInput(false);
        }
        catch (e) {
            alert(e)
        }
    }  
    async function changePrice2(id) {
        try {
            if (value2.length) {
                await axios.put("https://order-back-44f875a7dfd3.herokuapp.com/services", {id,price2:value2})
                service.price2 = value2;
                setValue2("");
            }
            setShowInput2(false);
        }
        catch (e) {
            alert(e)
        }
    } 
    return (
        <div>
            <h3>{service.name}:</h3>
            <span>{service.price1}</span>
            <IconButton onClick={() => {
                setShowInput(true)
                setShowInput2(false)
            }}>
                <EditIcon className="edit-icon" />
            </IconButton>
            {showInput && 
            <>
                <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='new price'/>
                <button onClick={() => changePrice1(service._id)}>OK</button>
            </>
           }
            {service.price2 && 
                <>
                    <span>2 позиции: {service.price2}</span>
                    <IconButton onClick={() => {
                        setShowInput2(true)
                        setShowInput(false)

                    }}>
                        <EditIcon className="edit-icon" />
                    </IconButton>
                </>
            }
            {showInput2 && service.price2 && 
                <>
                    <input value={value2} onChange={(e) => setValue2(e.target.value)} placeholder='new price'/>
                    <button onClick={() => changePrice2(service._id)}>OK</button>
                </>
            }
        </div>
    );
}

export default AdminServiceItem;