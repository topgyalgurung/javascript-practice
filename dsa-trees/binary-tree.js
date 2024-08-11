/** BinaryBinaryTree: node for a general tree. */

class BinaryBinaryTree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
 }
 
 
 class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
 
 
  /** minDepth(): return the minimum depth of the tree -- that is,
  
  * the length of the shortest path from the root to a leaf. */
  minDepth() {
    if(this.root === null) return 0;
 
 
    function minDepthHelper(node){
      // if no leaf node on right and left, depth = 1
      if(node.left === null && node.right === null) return 1;
 
 
      if(node.left === null) return minDepthHelper(node.right) + 1;
      if(node.right === null) return minDepthHelper(node.left) + 1;
      return (
        Math.min(minDepthHelper(node.left), minDepthHelper(node.right))+1
      );
      return minDepthHelper(this.root);
 
 
       // condensed form
      // return Math.max(1+ calc(node.left),1+calc(node.right)
    }
  }
 
 
  /** maxDepth(): return the maximum depth of the tree -- that is,
  
   * the length of the longest path from the root to a leaf. */
  maxDepth() {
    if(this.root === null) return 0;
    function maxDepthHelper(node){
      if(node.left === null && node.right === null) return 1;
      // if node right exist, add 1 and recursively find other children node if exist
      if(node.left === null) return maxDepthHelper(node.right) + 1;
      if(node.right === null) return maxDepthHelper(node.left) + 1;
      return (
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right))+1
      );
    }
      return maxDepthHelper(this.root);
 
 
  }
 
 
  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    // to store max path sum found so far
    let result = 0;
   
    function maxSumHelper(node){
      if(node === null) return 0;
      //recursively find max sum for left and right subtree
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      // represent a path that starts at left child, goes through current node and ends at right child
      const currentSum = node.val + leftSum + rightSum;
      // update max path sum result by comparing current sum and max sum to keep track of highest path seen so far
      result = Math.max(result, currentSum);
      // max sum extended to parent node
      return Math.max(leftSum, rightSum) + node.val;
    }
    maxSumHelper(this.root); // start from root
    return result;
  }
 
 
  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
 
 
  nextLarger(lowerBound) {
    if(this.root === null) return 0;
 
 
    let toVisitStack = [this.root];
    let nextLargerVal = null;
 
 
    while (toVisitStack.length) {
      let currentNode = toVisitStack.pop();
      let currentVal = currentNode.val;
      if (currentVal > lowerBound){
        if(nextLargerVal === null || currentVal < nextLargerVal){
          nextLargerVal = currentVal;
        }
      }
      if(currentNode.right) toVisitStack.push(currentNode.right);
      if(currentNode.left) toVisitStack.push(currentNode.left);
    }
    return nextLargerVal;
  }
 
 
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */
 
 
  areCousins(node1, node2) {
    if(root === null){ return false}
    // to store info about levels and parents of the nodes
    let node1Info = {level: null, parent:null}
    let node2Info = {level: null, parent: null}
 
 
    function dfs(node, level, parent){
      if(!node) return;
 
 
      if(node.val === node1){
        node1Info = {level, parent};
      }else if (node.val === node2{
        node2Info = {level, parent};
      }
      dfs(node.left, level +1, node);
      dfs(node.right, level +1, node);
    }
    // depth first search to gather necessary info
    dfs(root, 0, null);
    // check if node1 and node2 are at same level and have different parents
    return node1Info.level === node2Info.level && node1Info.parent !== node2Info.parent;
  }
 
 
  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string.
   * To serialize the tree such that the resulting string is [1,2,null,null,3,4,null,null,5, null, null],
   * we need to use a  pre-order traversal.
   * */
 
 
  static serialize(tree) {
    if (tree === null) return "null";
 
 
    const result = [];
 
 
    function traverse(node) {
        if (node) {
            result.push(node.val);
            traverse(node.left);
            traverse(node.right);
        } else {
            result.push("null");
        }
    }
 
 
    traverse(tree);
    return result.join(",");
 }
 
 
  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */
 
 
  static deserialize(data) {
    if(data === "null") return null;
    //split input string to get node values
    const values = data.split(",");
 
 
    function deserializeHelper(){
      if (values.length === 0) return 0;
        const currentVal = values.shift();
        if(currentVal === "null") return null;
 
 
        const node = new BinaryTree(+ currentVal);
        node.left = deserializeHelper();
        node.right = deserializeHelper();
        return node;
    }
    const root = deserializeHelper();
    return root;
  }
 /*
 //
 //
 1,2,null,null,3,4,null,null,5,null,null
 BinaryTree {
  root: 1,
  left: BinaryTree { root: 2, left: null, right: null },
  right: BinaryTree {
    root: 3,
    left: BinaryTree { root: 4, left: null, right: null },
    right: BinaryTree { root: 5, left: null, right: null }
  }
 }
  */
 
 
  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */
 
 
  lowestCommonAncestor(node1, node2, root=this.root) {
    //base case: empty tree or root is one of target nodes
    if(root === null || root === node1 || root === node2){
        return root;
    }
    //this = binarytree
    const left = this.lowestCommonAncestor( node1, node2, root.left);
    const right = this.lowestCommonAncestor(node1,node2,root.right);
    // if neither node null, currentNode is the ancestor
    if(left!=null && right !=null){
        return root;
    }
    //
    return left != null ? left : right; 
 }
 }
 // Example usage:
 const root = new BinaryTreeNode(3);
 const tree = new BinaryTree(root);
 
 
 
 
 /* build left subtree */
 
 
 const left = new BinaryTreeNode(5);
 root.left = left;
 
 
 const leftLeft = new BinaryTreeNode(6);
 left.left = leftLeft;
 
 
 const leftRight = new BinaryTreeNode(2);
 left.right = leftRight;
 
 
 const leftRightLeft = new BinaryTreeNode(7);
 leftRight.left = leftRightLeft;
 
 
 const leftRightRight = new BinaryTreeNode(4);
 leftRight.right = leftRightRight;
 
 
 
 
 /* build right subtree */
 
 
 const right = new BinaryTreeNode(1);
 root.right = right;
 
 
 const rightLeft = new BinaryTreeNode(0);
 right.left = rightLeft;
 
 
 const rightRight = new BinaryTreeNode(8);
 right.right = rightRight;
 
 
 /* test examples */
 
 
 // root = 3, p = 5, q = 1
 console.log(`root (${tree.lowestCommonAncestor(left, right).val}) is the LCA`);
 // --> root (3) is the LCA
 
 
 
 
 // root = 3, p = 2, q = 7
 console.log(`leftRight (${tree.lowestCommonAncestor(leftRight, leftRightLeft).val}) is the LCA`);
 // --> leftRight (2) is the LCA
 
 
 
 
 // root = 3, p = 7, q = 6
 console.log(`left (${tree.lowestCommonAncestor(leftRightLeft, leftLeft).val}) is the LCA`);
 // --> left (5) is the LCA
 
 
 
 
 // root = 3, p = 8, q = 0
 console.log(`right (${tree.lowestCommonAncestor(rightLeft, rightRight).val}) is the LCA`);
 // --> right (1) is the LCA
 
 
 module.exports = { BinaryTree, BinaryBinaryTree };

 // Further study
//  path sum
// https://leetcode.com/problems/path-sum/

// path sum 2
// https://leetcode.com/problems/path-sum-ii/
