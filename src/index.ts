import P5 from 'p5';
import p5 from 'p5';

const Canvas = (p5: p5) => {

    p5.setup = () => {
        p5.createCanvas(400, 400);
    };

    p5.draw = () => {
        p5.textSize(16);
        p5.textAlign(p5.CENTER);    
        p5.text("P5 + TypeScript = 🥰", p5.height/2, p5.width/2);
    }

};

new P5(Canvas, document.getElementById('canvas-1')!);