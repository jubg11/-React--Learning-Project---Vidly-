import React, { Component } from 'react';

// columns: array
// sortColumn: object
// onSort: function

class TableHeader extends Component {

    raiseSort = (path) =>  {
        const sortColumn = {...this.props.sortColumn };

        if(sortColumn.path === path){
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        }
        else{
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort( sortColumn );
    }

    renderSortIcon = (col) =>{
        const { sortColumn } = this.props;

        if(col.path !== sortColumn.path)
            return null;
        if(sortColumn.order === 'asc')
            return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }

    render() {

        return (
            <thead>
                <tr>
                    {this.props.columns.map(col =>
                        <th onClick={() => this.raiseSort(col.path)} key={col.path || col.key} className="clickable">
                            {col.label} {this.renderSortIcon(col)}
                        </th>
                    )}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;