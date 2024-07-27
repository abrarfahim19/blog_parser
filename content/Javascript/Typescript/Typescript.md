Node doesn't run typescript file. It runs the Javascript file that is compiled from typescript.

#### Structural Type System
Type checking focuses on the shape that values have. This is called `Structural Typing` or `Duck Typing`.

```ts
interface Point{
	x: number;
	y: number;
}

function logPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`)
}

// Never defined as Point type. But still checks out
const point = { x: 10 , y: 20};
logPoint(point);
```

And this is also true if the subsets of the object's fields match.

```ts
const point2 = { x: 10 , y: 20, z: 30};
logPoint(point2);
```

And a Class is no different from an object in this case:
```ts
class VirtualPoint{
	x: number;
	y: number;

	constructor(x: number, y: number){
		this.x = x;
		this.y = y;
	}
}

const newPoint = new VirtualPoint(10, 20);
logPoint(newPoint);
```

[[Typescript Uses]]
