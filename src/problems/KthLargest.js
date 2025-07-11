class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} heap
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = [];

        for (let num of nums) {
            // can we loop untill k
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap[this.heap.length] = val;
        this.hepifyUp();
        
        if (this.heap.length > this.k) {

            this.removeMin();
        }

        return this.heap[0]
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp
    }

    hepifyUp() {
        let currentIndex = this.heap.length - 1;

        while (this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    heapifyDown() {
        let i = 0;
        const length = this.heap.length;

        while (true) {
            let left = 2 * i + 1
            let right = 2 * i + 2
            let smallest = i

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }

            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }

            if (smallest !== i) {
                this.swap(smallest, i)
                i = smallest
            } else {
                break;
            }
        }
    }

    removeMin() {
        const last = this.heap.pop();

        if (this.heap.length === 0)
            return;

        this.heap[0] = last;
        this.heapifyDown()

    }
}
