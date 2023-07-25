import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <select style={{backgroundColor:"rgb(72, 249, 99)",padding:"10px 80px"}} className='alert tweak'
        onChange={handleChange}>
                <option style={{backgroundColor:"rgb(72, 249, 99)",fontSize:"20px"}} value="&#36;">&#36; Dollar</option>
                <option style={{backgroundColor:"rgb(72, 249, 99)",fontSize:"20px"}} value="&#163;">&#163; Pound</option>
                <option style={{backgroundColor:"rgb(72, 249, 99)",fontSize:"20px"}} value="&#8364;">&#8364; Euro</option>
                <option style={{backgroundColor:"rgb(72, 249, 99)",fontSize:"20px"}} value="&#8377;">&#8377; Rupee</option>
        </select>
    );
};
export default Currency;