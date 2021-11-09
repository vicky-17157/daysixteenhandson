import React from "react";
import './mytable.css';
const TableHeader = () => {
    return (
        <thead className="th">
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td className="th,td">Surendra</td>
                <td>Software engineer</td>
            </tr>
            <tr>
                <td className="th,td">Surya</td>
                <td>Software developer</td>
            </tr>
            <tr>
                <td className="th,td">Sanjeev</td>
                <td>Testing engineer</td>
            </tr>
            <tr>
                <td className="th,td">Vijay</td>
                <td>Business analyst</td>
            </tr>
            <tr>
                <td className="th,td">Aditya</td>
                <td>Product engineer</td>
            </tr>
        </tbody>
    )
}

class Table extends React.Component {
    render() {
        return(
            <table className="table">
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table;