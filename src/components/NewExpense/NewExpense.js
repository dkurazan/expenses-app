import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const showFormHandler = () => {
        setForm(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormBtnHandler} />)
    }

    const [form, setForm] = useState(
        <button onClick={showFormHandler}>Add New Expense</button>
    );


    const hideFormBtnHandler = () => {
        setForm(<button onClick={showFormHandler}>Add New Expense</button>)
    }


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            {form}
        </div>
    );
};

export default NewExpense;
