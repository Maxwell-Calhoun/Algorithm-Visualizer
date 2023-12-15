import './CSS/Sorting.css';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { insertionSort } from "../Algorithms/SortingAlgorithms";
import { SortSketch } from "../Components/SortingComponent";

export default class Sorting extends React.Component {
    constructor() {
        super();
        this.state = { selectedValue: 'test', disabled: true };
        this.dataRef = React.createRef();
    }

    async handleSortPressed(dataRef, selection, e) {
        switch (selection) {
            case 'insertion':
                await insertionSort(dataRef);
                break;
            default:
                console.log("ERROR: No Selected Algorithm");
        }
        return true;
    };

    handleSelection = (event) => {
        console.log(event)
        this.setState({ selectedValue: event.target.value, disabled: false });
    }

    render() {
        return (
            <div>
                <div className="Sorting">
                    <SortSketch dataRef={this.dataRef}/>
                </div>
                <div className="selection">
                    <select name='AlgorithmSelection' onChange={this.handleSelection}>
                        <option value='test' defaultValue={true} hidden={true}>SELECT ALGORITHM</option>
                        <option value='insertion'>Insertion Sort</option>
                        <option value='test'>TEST</option>
                    </select>
                    <Button onClick={(e) => this.handleSortPressed(this.dataRef, this.state.selectedValue, e)} disabled={this.state.disabled}>Sort</Button>
                </div>
            </div>
        );
    }
};