import { TreeNode } from "../classes/tree-node";

export function arrayToBinaryTree(arr) {
    if (!arr.length) return null;
    
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    
    while (i < arr.length) {
      let current = queue.shift();
      
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]);
        queue.push(current.left);
      }
      i++;
      
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]);
        queue.push(current.right);
      }
      i++;
    }
    
    return root;
  }
