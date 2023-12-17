import './CSS/Sorting.css';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { insertionSort, mergeSort } from "../Algorithms/SortingAlgorithms";
import { SortSketch, getRandomData, WIDTH } from "../Components/SortingComponent";

export let speed = 20;
export default class Sorting extends React.Component {
    constructor() {
        super();
        this.state = { selectedValue: 'test', sortDisabled: true, newDataDisabled: false, sleepDuration:20};
        this.dataRef = React.createRef();
    }

    async handleSortPressed(dataRef, selection) {
        this.setState({ sortDisabled: true, newDataDisabled: true });
        const data = dataRef.current;
        switch (selection) {
            case 'insertion':
                await insertionSort(data);
                break;
            case 'merge':
                await mergeSort(data, 0, data.length - 1);
                break;
            case 'quick':
                await mergeSort(dataRef);
                break;
            case 'heap':
                await mergeSort(dataRef);
                break;
            default:
                console.log("ERROR: No Selected Algorithm");
        }
        this.setState({ sortDisabled: false, newDataDisabled: false });
    };
    
    handleNewData = () => {
        this.dataRef.current = getRandomData(WIDTH / 10);
    }
    
    handleSelection = (event) => {
        this.setState({ selectedValue: event.target.value, sortDisabled: false });
    }

    handleNewSpeed = (event) => {
        this.setState({ sleepDuration: event.target.value })
        speed = event.target.value;
    }

    render() {
        return (
            <div className='Sorting'>
                <Header/>
                <div className="Sorting-Sketch">
                    <SortSketch dataRef={this.dataRef}/>
                </div>
                <div className="selection">
                    <select name='AlgorithmSelection' onChange={this.handleSelection}>
                        <option value='test' defaultValue={true} hidden={true}>SELECT ALGORITHM</option>
                        <option value='insertion'>Insertion Sort</option>
                        <option value='merge'>Merge Sort</option>
                        <option value='quick'>Quicksort</option>
                        <option value='heap'>Heapsort</option>
                    </select>
                    <input type='number' onChange={this.handleNewSpeed} placeholder='Enter Speed 20(ms)'/>
                    <Button onClick={(e) => this.handleSortPressed(this.dataRef, this.state.selectedValue)} disabled={this.state.sortDisabled}>Sort</Button>
                    <Button onClick={(e) => this.handleNewData(this.dataRef, this.state.selectedValue)} disabled={this.state.newDataDisabled}>New Data</Button>
                </div>
                <Footer/>
            </div>
        );
    }
};