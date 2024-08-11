/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}
class Tree {
  constructor(root = null) {
    this.root = root;
  }
  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    if (!this.root) {
      return 0;
    }
    let total = this.root.val;

    // recursively add values
    function sumHelper(node) {
      for (let child of node.children) {
        total += child.val;
        // if child has any children
        if (child.children.length > 0) {
          // then call recursive function to add values
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    if (!this.root) {
      return 0;
    }
    // if root val even add 1 else set 0
    let evenCount = this.root.val % 2 === 0 ? 1 : 0;
    // recursive even count function helper
    function evenCountHelper(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) {
          evenCount++;
        }
        if (child.children.length > 0) {
          evenCountHelper(child);
        }
      }
      evenCountHelper(this.root);
      return evenCount;
    }
  }
  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0;
    }
    let countGreater = this.root.val > lowerBound ? 1 : 0;

    function countGreaterHelper(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          countGreater++;
        }
        if (child.children.length > 0) {
          countGreater(child);
        }
      }
    }
    countGreaterHelper(this.root);
    return countGreater;
  }
}
module.exports = { Tree, TreeNode };
//  sum values:  10
//  count even:  undefined
//  number of nodes greater than 1:  2
