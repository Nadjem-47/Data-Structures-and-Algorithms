class maxHeap {
    constructor(values) {
        this.heap = [];
        for (let val of values) {
            this.add(val);
        }
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    getRightChildIndex(i) {
        return i * 2 + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    add(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0 && this.heap[i] > this.heap[this.getParentIndex(i)]) {
            this.swap(i, this.getParentIndex(i));
            i = this.getParentIndex(i);
        }
    }

    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    heapifyDown() {
        let i = 0;
        while (this.getLeftChildIndex(i) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(i);
            const rightChildIndex = this.getRightChildIndex(i);

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] > this.heap[largerChildIndex]
            ) {
                largerChildIndex = rightChildIndex;
            }

            if (this.heap[i] >= this.heap[largerChildIndex]) break;

            this.swap(i, largerChildIndex);
            i = largerChildIndex;
        }
    }

    size() {
        return this.heap.length;
    }
}

const leastInterval = function(tasks, n) {
    const freq = tasks.reduce((acc, task) => {
        acc[task] = (acc[task] || 0) + 1;
        return acc;
    }, {});

    const heap = new maxHeap(Object.values(freq));
    const queue = []; // each item: [remainingCount, availableAtTime]

    let time = 0;

    while (heap.size() > 0 || queue.length > 0) {
        time++;

        if (heap.size() > 0) {
            const count = heap.poll();
            if (count - 1 > 0) {
                queue.push([count - 1, time + n]);
            }
        }

        if (queue.length > 0 && queue[0][1] === time) {
            const [readyCount] = queue.shift();
            heap.add(readyCount);
        }
    }

    return time;
};
