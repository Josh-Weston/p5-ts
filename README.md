# p5-ts
A template for creating applications with P5.js and TypeScript in [instance mode](https://p5js.org/reference/#/p5/p5)

# Configuration Steps

1. Clone the repo (e.g. `https://github.com/Josh-Weston/p5-ts.git`)
2. Run `npm i` to install the packages
3. Edit the `src/index.ts` file with your code
4. Run `npm run build` to compile your TypeScript to JavaScript
5. Open your `index.html` to see the results

# Multiple Canvases

You can add another canvas to the `index.html` file to allow multiple p5.js instances to run at the same time.

#### Example:

Add a new `div` to `index.html` called `canvas-2`

`<div id="canvas-2"></div>`

Add a new instance to `index.ts` that references the `canvas-2` element.

```typescript
const Canvas2 = (p5: p5) => {

    p5.setup = () => {
        p5.createCanvas(400, 400);
    };

    p5.draw = () => {
        p5.textSize(16);
        p5.textAlign(p5.CENTER);    
        p5.text("Hello from canvas-2 👋", p5.height/2, p5.width/2);
    }

};

new P5(Canvas2, document.getElementById('canvas-2')!);
```

# Multiple Applications in a single repository

You can have multiple applications within the same repository simply by editing the `build` script in `package.json` to
point to a different folder and changing the `<script>` tag in `index.html` to point to the new `index.js` file
