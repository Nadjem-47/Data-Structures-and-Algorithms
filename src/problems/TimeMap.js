/*

LeetCode Problem #981: Time Based Key-Value Store

Description:
Design a time-based key-value data structure that can store multiple values for the same key at different timestamps and retrieve the key's value at a certain timestamp.

You need to implement the TimeMap class:

TimeMap(): Initializes the data structure.

void set(String key, String value, int timestamp): Stores the key key with the value value at the given time timestamp.

String get(String key, int timestamp): Returns a value such that set was called previously with key and timestamp_prev <= timestamp. If there are multiple such values, return the one with the largest timestamp_prev. If no values exist, return "".


*/


var TimeMap = function() {
    this.store = {}; // key: [{timestamp, value}]
};

TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.store[key]) {
        this.store[key] = [];
    }
    // Since timestamps are strictly increasing, we can just push
    this.store[key].push({timestamp, value});
};

TimeMap.prototype.get = function(key, timestamp) {
    if (!this.store[key] || this.store[key].length === 0) return "";
    
    const entries = this.store[key];
    let left = 0;
    let right = entries.length - 1;
    let result = "";
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (entries[mid].timestamp <= timestamp) {
            result = entries[mid].value;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
};