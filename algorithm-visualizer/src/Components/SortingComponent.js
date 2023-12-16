import p5 from "p5";
import React, { useEffect, useRef } from 'react';

export let WIDTH;
let HEIGHT;

export const SortSketch = ({dataRef}) => {
    const sketchRef = useRef();
    useEffect(() => {
        const sketch = (canvas) => {
            canvas.setup = () => {
                WIDTH = canvas.windowWidth;
                HEIGHT = canvas.windowHeight - 100;
                dataRef.current = getRandomData(WIDTH / 10);
                canvas.createCanvas(WIDTH, HEIGHT);
            };

            canvas.draw = () => {
                canvas.background(0);
                const data = dataRef.current;
                for (let ii = 0; ii < data.length; ii++) {
                    canvas.rect(ii*10, HEIGHT, 10, -data[ii] * Math.log(HEIGHT / 10));
                }
            };
        }
        const p5_object = new p5(sketch, sketchRef.current);

        return () => {
            p5_object.remove();
        };
    }, [dataRef]);
    return <div ref={sketchRef}></div>;
};

export default SortSketch;

export const getRandomData = (n) => {
    if (n < 0) {return};
    let randomData = [];
    for (let ii = 0; ii < n; ii++) {
        randomData[ii] = Math.floor(Math.random() * n) + 1;
    }
    return randomData;
};