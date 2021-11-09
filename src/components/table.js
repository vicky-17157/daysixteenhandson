import React from 'react';
import './mytable.css';
const TableHeader = () => {
    return (
      <thead className="th" > 
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>City</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row.city}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  class Table extends React.Component {
    
    render() {
      const {characterData} = this.props
      return (
        <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
      )
    }
  }
  class Samp extends React.Component {
    render() {
      const characters = [
        {
          name: 'Surendra',
          job: 'Software Engineer',
          city:'Bangalore'
        },
        {
          name: 'surya',
          job: 'Artist',
          city:'noida'
        },
        {
          name: 'arjun',
          job: 'HR',
          city:'ooty'
        },
        {
          name: 'saieesh',
          job: 'Manager',
          city:'trivandrum'
        },
        {
          name: 'Vijay',
          job: 'Analyst',
          city:'neyveli'
        },
        {
          name: 'yuvan',
          job: 'System Engineer',
          city:'chennai'
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
        )
    }
  }

  export default Samp;