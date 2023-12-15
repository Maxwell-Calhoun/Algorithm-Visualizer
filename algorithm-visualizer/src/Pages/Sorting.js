import './CSS/Sorting.css';
import p5 from "p5";
import React, { useEffect, useRef } from 'react';

const P5Sketch = () => {
    const sketchRef = useRef();

    useEffect(() => {
        const sketch = (canvas) => {
            canvas.setup = () => {
                canvas.createCanvas(1000, 1000);
            };

            canvas.draw = () => {
                canvas.background(100);
                canvas.ellipse(canvas.width / 2, canvas.height / 2, 100, 100);
                for (let ii = 0; ii < 10; ii++) {
                    canvas.rect( ii * 100, canvas.height - 100, 55, 55 * -ii);
                }
                
            };
        }

        const p5_test = new p5(sketch, sketchRef.current);

        return () => {
            p5_test.remove();
        };
    }, []);
}

export default function Sorting() {
    return (
        <div className="Sorting">
            <P5Sketch/>
        </div>
    );
}