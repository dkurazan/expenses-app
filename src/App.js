import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMB_EXPENSES = [
    {
        id: "e1",
        title: "Books",
        amount: 94.12,
        date: new Date(2022, 7, 14),
    },
    {
        id: "e2",
        title: "Car Insurance",
        amount: 232.21,
        date: new Date(2023, 2, 28),
    },
    {
        id: "e2",
        title: "Car Insurance",
        amount: 109.21,
        date: new Date(2023, 4, 18),
    },
    {
        id: "e3",
        title: "Food",
        amount: 194.32,
        date: new Date(2021, 7, 14),
    },
    {
        id: "e4",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e5",
        title: "Pillow",
        amount: 20.99,
        date: new Date(2019, 7, 14),
    },
];

const App = () => {
    
    const [expenses, setExpenses] = useState(DUMB_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
