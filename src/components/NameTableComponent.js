import React from 'react';
import ActionColumnComponent from './ActionColumnComponent';

export default function NameTableComponent(props) {

    console.log(props.names)

    // For each index of props.name, create a table row with all of the information
    const tableRows = props.names.map((index) => 
        <tr key={index.id}>
            <th>{index.first}</th>
            <th>{index.last}</th>
            <th>{index.first + " " + index.last}</th>
            <th><ActionColumnComponent/></th>
        </tr>
    )

    return (
        <div>
            Names
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Full Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
}