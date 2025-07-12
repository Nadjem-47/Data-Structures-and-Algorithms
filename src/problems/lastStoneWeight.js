/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new MaxHeap();

    for (let stone of stones) {
        heap.insert(stone);
    }

    while (heap.size() > 1) {
        const first = heap.extractMax();
        const second = heap.extractMax();

        if (first !== second) {
            heap.insert(first - second);
        }
    }

    return heap.size() === 1 ? heap.extractMax() : 0;
};

// MaxHeap constructor function
function MaxHeap() {
    this.data = [];
}

MaxHeap.prototype.insert = function(val) {
    this.data.push(val);
    this.heapifyUp();
};

MaxHeap.prototype.extractMax = function() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();

    const max = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown();
    return max;
};

MaxHeap.prototype.size = function() {
    return this.data.length;
};

MaxHeap.prototype.swap = function(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
};

MaxHeap.prototype.heapifyUp = function() {
    let index = this.data.length - 1;

    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);

        if (this.data[index] <= this.data[parentIndex]) break;

        this.swap(index, parentIndex);
        index = parentIndex;
    }
};

MaxHeap.prototype.heapifyDown = function() {
    let index = 0;
    const length = this.data.length;

    while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let largest = index;

        if (left < length && this.data[left] > this.data[largest]) {
            largest = left;
        }

        if (right < length && this.data[right] > this.data[largest]) {
            largest = right;
        }

        if (largest === index) break;

        this.swap(index, largest);
        index = largest;
    }
};
