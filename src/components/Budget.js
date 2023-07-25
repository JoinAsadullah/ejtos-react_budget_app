import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, expenses, currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [budget, setBudget] = useState('2000');

    const handleChange = (event) => {
        setBudget(event.target.value);
    }
    const handleSubmit = (event) => {
        
        if(budget >= 20000) {
            alert("The value cannot exceed 20000");
            setBudget(20000);
            return;
        }
        if(budget < totalExpenses) {
            alert("The value cannot be less than expenses");
            setBudget(totalExpenses);
            return;
        }

        dispatch({
            
            type: 'SET_BUDGET',
            payload: budget,
        });

    }


    return (
        <div className='alert alert-secondary'>
            <form>{currency}
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={handleChange}
                        onBlur={handleSubmit}>
                    </input>
            </form>
            
        </div>
    );
};
export default Budget;