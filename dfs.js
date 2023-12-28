class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    dfsRecursive(startingNode) {
        const visited = {};
        const result = [];

        const dfs = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        };

        dfs(startingNode);
        return result;
    }

    dfsIterative(startingNode) {
        const visited = {};
        const stack = [startingNode];
        const result = [];

        visited[startingNode] = true;

        while (stack.length) {
            const currentVertex = stack.pop();
            result.push(currentVertex);
            // This is how adjacencyList would be created
            // Graph {
            // adjacencyList: { 
            //      A: [ 'B', 'C' ], 
            //      B: [ 'A', 'D' ], 
            //      C: [ 'A' ], 
            //      D: [ 'B' ] }
            //  }

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }
}

// Usage example:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
console.log(graph);

console.log(graph.dfsRecursive('A')); // Output: [ 'A', 'B', 'D', 'C' ]
console.log(graph.dfsIterative('A')); // Output: [ 'A', 'C', 'B', 'D' ]
