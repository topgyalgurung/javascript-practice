class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}
class Graph {
  constructor() {
    this.nodes = new Set();
  }
  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }
  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      this.addVertex(vertex);
    }
  }
  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
    
  }
  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }
  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let node of this.nodes){
      if(node.adjacent.has(vertex)){
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }
  // this function returns an array of Node values using DFS
  // DFS  Recursive 
  depthFirstSearch(start) {
    // set as we dont want to visit the node again 
    let seen = new Set();
    const result =[];
    
    function traverseHelper(vertex){
      if(!vertex) return null;
      
      seen.add(vertex);
      result.push(vertex.value);
      
      vertex.adjacent.forEach(neighbor => {
        if (!seen.has(neighbor)) {
          return traverseHelper(neighbor);
        }
      });
      
//    for(let neighbor of vertex.adjacent){
//      if(!seen.has(neighbor)){
//        return traverseHelper(neighbor);
//      }
//    } 
      /* 
      this does not print T 
      */
    }
    traverseHelper(start);
    return result;
  }
  
  depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const seen = new Set();
    
    let current;
    
    seen.add(start);
    
    while (stack.length){
      current = stack.pop();
      result.push(current.value);
      
      current.adjacent.forEach(neighbor => {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          stack.push(neighbor);
        }
      });
      }
      return result;
  }
  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    
    let toVisitQueue = [start];
    const result = [];
    const seen = new set();
    seen.add(start);
    
    let curVertex;
    while(toVisitQueue.length){
      curVertex = queue.shift();
      result.push(curVertex.value());
      
      curVertex.adjacent.forEach(neighbor =>{
        if(!seen.has(neighbor)){
          seen.add(neighbor);
          queue.push(neighbor);
        }
      });
  }
  return result;
}
}


shortestPath(source, target){
    // graph is unweighted and undirected
    if(start === end) return [start.value];
    
    const toVisitQueue = [start];
    const seen = new set();
    const predecessors ={};
    const path =[];
    
    let curVertex;
    while(toVisitQueue.length){
      curVertex = queue.shift();
      if(curVertex === end){
        let stop = predecessors[end.value];
        while(stop){
          path.push(stop);
          stop = predecessors[stop];
        }
        path.unshift(start.value);
        path.reverese();
        return path;
      }
      seen.add(curVertex);
      
      curVertex.adjacent.forEach(neighbor =>{
        if(!seen.has(neighbor)){
          predecessors[neighbor.value] = curVertex.value;
          toVisitQueue.push(neighbor);
        }
      });
    }
  }

/*
Further study:
## **course-schedule**

https://leetcode.com/problems/course-schedule

## **numberOfIslands**

https://leetcode.com/problems/number-of-islands/

## **course-schedule-ii**

https://leetcode.com/problems/course-schedule-ii/

## **cloneGraph**

https://leetcode.com/problems/clone-graph/

## **hasCycle**

Write a function on the graph class which returns true if the graph contains a cycle

## **shortestReach**

https://www.hackerrank.com/challenges/bfsshortreach/problem

## **graphValidTree**

https://leetcode.com/problems/graph-valid-tree

## **roadsAndLibraries**

https://www.hackerrank.com/challenges/torque-and-development/problem

## **evenTree**

https://www.hackerrank.com/challenges/even-tree/problem



*/

module.exports = {Graph, Node}