import './CSS/Sorting.css';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { insertionSort, mergeSort } from "../Algorithms/SortingAlgorithms";
import { SortSketch, getRandomData, WIDTH } from "../Components/SortingComponent";

export default class Sorting extends React.Component {
    constructor() {
        super();
        this.state = { selectedValue: 'test', sortDisabled: true, newDataDisabled: false };
        this.dataRef = React.createRef();
    }

    async handleSortPressed(dataRef, selection) {
        this.setState({ sortDisabled: true, newDataDisabled: true });
        switch (selection) {
            case 'insertion':
                await insertionSort(dataRef);
                break;
            case 'merge':
                await mergeSort(dataRef);
                break;
            default:
                console.log("ERROR: No Selected Algorithm");
        }
        this.setState({ sortDisabled: false, newDataDisabled: false });
    };

    handleSelection = (event) => {
        console.log(event)
        this.setState({ selectedValue: event.target.value, sortDisabled: false });
    }

    handleNewData = () => {
        this.dataRef.current = getRandomData(WIDTH / 10);
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
                        <option value='merge'>Merge Sort</option>
                    </select>
                    <Button onClick={(e) => this.handleSortPressed(this.dataRef, this.state.selectedValue)} disabled={this.state.sortDisabled}>Sort</Button>
                    <Button onClick={(e) => this.handleNewData(this.dataRef, this.state.selectedValue)} disabled={this.state.newDataDisabled}>New Data</Button>
                </div>
            </div>
        );
    }
};