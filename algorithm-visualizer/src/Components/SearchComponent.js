import p5 from "p5";
import React, { useEffect, useRef } from 'react';
import { nodeCount } from "../Pages/Search";
export let WIDTH;
let HEIGHT;

export const SearchSketch = ({dataRef, dataStateRef}) => {
    const sketchRef = useRef();

    useEffect(() => {
        const sketch = (canvas) => {
            canvas.setup = () => {
                WIDTH = canvas.windowWidth;
                HEIGHT = canvas.windowHeight - 200;
                ({ data: dataRef.current, dataState: dataStateRef.current } = createData(nodeCount));
                canvas.createCanvas(WIDTH, HEIGHT);
            }

            canvas.draw = () => {
                const data = dataRef.current;
                const dataState = dataStateRef.current;
                let y = Math.floor(.15 * HEIGHT);
                let level = .10 * HEIGHT;
                let horizontalSpacing = .24 * WIDTH;
                
                canvas.background("#404258");
                recursiveDrawing(canvas, data, dataState, 0, WIDTH / 2, y, level, horizontalSpacing);
            }
        }

        const p5_object = new p5(sketch, sketchRef.current);

        return () => {
            p5_object.remove();
        };
    }, [dataRef, dataStateRef]);
    return <div ref={sketchRef}></div>;
};

export default SearchSketch;

export const createData = (size) => {
    if (size < 0) {return};
    let data = [];
    let dataState = [];
    
    for (let ii = 0; ii < size; ii++) {
        data[ii] = ii;
        dataState[ii] = 0;
    }
    
    return {data, dataState};
};

const recursiveDrawing = (canvas, data, dataState, n, x, y, level, spacing) => {
    let leftChild = 2 * n + 1;
    let rightChild = 2 * n + 2;

    if (n < 0 || n >= data.length) { return };
    // unsearched
    if (dataState[n] === 0) {
        canvas.fill('#474E68');
    // searching
    } else if (dataState[n] === 1) {
        canvas.fill('#50577A');
    // searched
    } else if (dataState[n] === 2) {
        canvas.fill('#6B728E');
    // found
    } else {
        canvas.fill('#FFFFFF');
    }
    
    canvas.circle(x, y, 20);
    canvas.fill('#FFFFFF');
    canvas.text(data[n], x - 4, y + 2);
    

    if (leftChild < data.length) {
        canvas.stroke("#FFFFFF")
        canvas.line(x - 10, y, x - spacing, y + level);
        recursiveDrawing(canvas, data, dataState, leftChild, x - spacing, Math.floor(y + level), level, spacing / 2);
    }

    if (rightChild < data.length) {
        canvas.line(x + 10, y, x + spacing, y + level);
        recursiveDrawing(canvas, data, dataState, rightChild, x + spacing, Math.floor(y + level), level, spacing / 2);
    }
}