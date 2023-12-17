import './CSS/Search.css';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { SearchSketch, modifyData, createData } from "../Components/SearchComponent";

export let nodeCount = 70;
export default class Search extends React.Component {
    constructor() {
        super();
        this.dataRef = React.createRef();
        this.dataStateRef = React.createRef();
        this.state = {selectedOption: 'test'};
    }
    handleNewNodeCount = (event) => {
        ({ data: this.dataRef.current, dataState: this.dataStateRef.current } = createData(event.target.value));
        nodeCount = event.target.value;
    }

    handleSelection = (event) => {
        this.setState({ selectedOption: event.target.value });
    }

    render () {
        const { selectedOption } = this.state;

        return (
            <div className="Search">
                <Header/>
                <div className='Sketch'>
                    {(selectedOption === 'binary' || selectedOption === 'test') && (
                        <SearchSketch dataRef={this.dataRef} dataStateRef={this.dataStateRef}/>
                    )}
                </div>
                <Button className='button' onClick={null}/>
                <input type='number' onChange={this.handleNewNodeCount} placeholder='Enter Node Count (70)'/>
                <select name='AlgorithmSelection' onChange={this.handleSelection}>
                    <option value='test' defaultValue={true} hidden={true}>SELECT ALGORITHM</option>
                    <option value='binary'>Binary Search</option>
                </select>
                <Footer/>
            </div>
        );
    }
}