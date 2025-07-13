class MinHeap {
    constructor(values) {
        this.heap = [];

        for (let val of values) {
            const distance = val[0] ** 2 + val[1] ** 2;
            this.add([distance, ...val]);
        }
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    add(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[index][0] < this.heap[Math.floor((index - 1) / 2)][0]
        ) {
            this.swap(index, Math.floor((index - 1) / 2));
            index = Math.floor((index - 1) / 2);
        }
    }

    getClosestPoints(k) {
        const result = [];
        for (let index = 0; index < k; index++) {
            result.push([this.heap[0][1], this.heap[0][2]]);
            const last = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = last;
                this.heapifyDown();
            }
        }
        return result;
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let minIndex = index;

            if (
                this.heap[leftIndex] &&
                this.heap[leftIndex][0] < this.heap[minIndex][0]
            ) {
                minIndex = leftIndex;
            }
            if (
                this.heap[rightIndex] &&
                this.heap[rightIndex][0] < this.heap[minIndex][0]
            ) {
                minIndex = rightIndex;
            }

            if (minIndex !== index) {
                this.swap(index, minIndex);
                index = minIndex;
            } else {
                break;
            }
        }
    }
}

const kClosest = function (points, k) {
    const values = new MinHeap(points);
    return values.getClosestPoints(k);
};
