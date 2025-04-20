// Algorithm behind Garbage collection(Mark and Sweep)
// The Mark-and-Sweep Garbage Collection algorithm helps manage memory by identifying and removing unused
// objects in JavaScript.
class algo {
    constructor() {
        this.objects = [];
    }

    createObject(name) {
        const obj = { name: name, refCount: 1 };
        this.objects.push(obj);
        return obj;
    }

    mark() {
        this.objects.forEach(ovj => {
            if (obj.refCount > 0) {
                obj.marked = true;
            }
        });
    }

    sweep() {
        this.objects = this.objects.filter(obj => obj.marked);
    }

    collectGarbage() {
        this.mark();
        this.sweep();
    }
    prints() {
        return this.objects
    }
}
const gc = new algo();

const obj1 = gc.createObject("Object1");
const obj12 = gc.createObject("Object2");

obj12.refCount = 0;

gc.collectGarbage();
console.log(gc.prints());

