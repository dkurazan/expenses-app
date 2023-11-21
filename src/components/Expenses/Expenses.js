import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
    const [year, setYear] = useState("2023");

    const saveYearDataHandler = (year) => {
        setYear(year);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })

   

    return (
        <div className="expenses">
            <ExpensesFilter
                selected={year}
                onSaveYearData={saveYearDataHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <Card>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
