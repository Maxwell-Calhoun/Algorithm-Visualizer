import p5 from "p5";
import React, { useEffect, useRef } from 'react';

export let WIDTH;
let HEIGHT;

export const SortSketch = ({dataRef, dataStateRef}) => {
    const sketchRef = useRef();

    useEffect(() => {
        const sketch = (canvas) => {
            canvas.setup = () => {
                WIDTH = canvas.windowWidth;
                HEIGHT = canvas.windowHeight - 200;
                ({ randomData: dataRef.current, dataState: dataStateRef.current } = getRandomData(WIDTH / 10));
                canvas.createCanvas(WIDTH, HEIGHT);
            };

            canvas.draw = () => {
                const data = dataRef.current;
                const dataState = dataStateRef.current;

                canvas.background(0);
                
                for (let ii = 0; ii < data.length; ii++) {
                    // unsorted
                    if (dataState[ii] === 0) {
                        canvas.fill('#474E68');
                    // sorting
                    } else if (dataState[ii] === 1) {
                        canvas.fill('#50577A');
                    // sorted
                    } else {
                        canvas.fill('#6B728E');
                    }
                    canvas.rect(ii*10, HEIGHT, 10, -data[ii]);
                    
                }
            };
        }
        const p5_object = new p5(sketch, sketchRef.current);

        return () => {
            p5_object.remove();
        };
    }, [dataRef, dataStateRef]);
    return <div ref={sketchRef}></div>;
};

export default SortSketch;

export const getRandomData = (n) => {
    if (n < 0) {return};
    let randomData = [];
    let dataState = [];
    for (let ii = 0; ii < n; ii++) {
        // data created will not be bigger than the canvas of the screen no matter viewing device
        randomData[ii] = Math.floor(Math.random() * HEIGHT);
        dataState[ii] = 0;
    }
    return {randomData, dataState};
};