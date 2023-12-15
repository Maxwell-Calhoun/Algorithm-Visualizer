import './CSS/Sorting.css';
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { insertionSort } from "../Algorithms/SortingAlgorithms";
import { SortSketch } from "../Components/SortingComponent";

export default function Sorting() {
    const dataRef = useRef();
    return (
        <div>
            <div className="Sorting">
                <SortSketch dataRef={dataRef}/>
            </div>
            <div classname="selection">
                <select>
                    
                </select>
                <Button onClick={() => insertionSort(dataRef)}>Sort</Button>
            </div>
        </div>
    );
}