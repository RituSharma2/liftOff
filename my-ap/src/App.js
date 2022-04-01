
import './App.css';

import React, { Component } from 'react';
  
function App() {
   
        var heading = ['employee_id', 'employee_name', 'date_of_birth', 'designation'];
        var body =
            [['1', 'neena', '4/10/1998',"Software Engineer"],
            ['2', 'himanshu', '6/2/1994',"Software Engineer"],
            ['3', 'Ranchi', '20/10/1995',"Software Engineer"],
            ['4', 'urvashi', '29/03/1996',"Software Engineer"]
            ];
        return (
            <div >
                <Table heading={heading} body={body} />,
            </div>
        );
    }

  
class Table extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <table style={{ width: 500 }}>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>
        );
    }
}
  
class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}
  
export default App;
