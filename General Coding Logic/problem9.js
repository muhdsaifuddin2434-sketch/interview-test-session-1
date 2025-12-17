function findPath(graph, start, end) {
    if (!graph[start] || !graph[end]) {
        return { exists: false, path: [] };
    }

    let queue = [[start]]; // Queue of paths
    let visited = new Set();

    while (queue.length > 0) {
        let path = queue.shift(); // Get the first path
        let node = path[path.length - 1]; // Current node

        if (node === end) {
            return { exists: true, path: path };
        }

        if (!visited.has(node)) {
            visited.add(node);

            let neighbors = graph[node] || [];
            for (let neighbor of neighbors) {
                let newPath = [...path, neighbor];
                queue.push(newPath);
            }
        }
    }

    return { exists: false, path: [] };
}

// Example graph
const graph = {
    A: [],
    B: ['A', 'D'],
    C: [],
    D: [],
    E: ['F'],
    F: ['B'],
    G: []
};

// Test cases
console.log(findPath(graph, 'D', 'B')); // {exists: false, path: []}
console.log(findPath(graph, 'F', 'A')); // {exists: true, path: ['F','B','A']}
console.log(findPath(graph, 'G', 'C')); // {exists: false, path: []}
console.log(findPath(graph, 'E', 'D')); // {exists: true, path: ['E','F','B','D']}
