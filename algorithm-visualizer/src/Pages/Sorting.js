import './CSS/Sorting.css';
import p5 from "p5";
import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button'
import { insertionSort, sort } from "../Algorithms/SortingAlgorithms"

const getRandomData = (n) => {
    if (n < 0) {return};
    let randomData = [];
    for (let ii = 0; ii < n; ii++) {
        randomData[ii] = Math.floor(Math.random() * n) + 1;
    }
    return randomData;
};

const P5Sketch = ({dataRef}) => {
    const sketchRef = useRef();

    useEffect(() => {

        const sketch = (canvas) => {
            canvas.setup = () => {
                canvas.createCanvas(1500, 800);
            };

            canvas.draw = () => {
                canvas.background(100);
                const data = dataRef.current;
                for (let ii = 0; ii < data.length; ii++) {
                    canvas.rect(ii*15, 800, 15, -data[ii]);
                }
                
            };
        }

        const p5_test = new p5(sketch, sketchRef.current);

        return () => {
            p5_test.remove();
        };
    }, [dataRef]);
    return <div ref={sketchRef}></div>;
}

export default function Sorting() {
    const dataRef = useRef(getRandomData(100));
    return (
        <div>
            <div className="Sorting">
                <P5Sketch dataRef={dataRef}/>
            </div>
            <div>
                <Button onClick={() => insertionSort(dataRef)}>Sort</Button>
            </div>
        </div>
    );
}