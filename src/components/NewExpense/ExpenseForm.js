import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setenteredAmount] = useState("");
    const [enteredDate, setenteredDate] = useState("");

    const inputChangeHandler = (identifier, value) => {
        if (identifier === "title") {
            setEnteredTitle(value);
        } else if (identifier === "amount") {
            setenteredAmount(value);
        } else {
            setenteredDate(value);
        }
    };

    const submitHanler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    };

    return (
        <form onSubmit={submitHanler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={(event) =>
                            inputChangeHandler("title", event.target.value)
                        }
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={(event) =>
                            inputChangeHandler("amount", event.target.value)
                        }
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2023-12-31"
                        value={enteredDate}
                        onChange={(event) =>
                            inputChangeHandler("date", event.target.value)
                        }
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onHideForm}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
