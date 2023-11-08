export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // queue
    const q: (BinaryNode<number> | null | undefined)[] = [head];

    // dequeue/shift node from the queue, visit node/search, enqueue its children
    while (q.length) {
        // const curr = q.shift() as BinaryNode<number>;

        // dequeue node from the queue
        const curr = q.shift();

        // if null dequeue the next node
        if (!curr) {
            continue;
        }

        // visit node/search
        if (curr.value === needle) {
            return true;
        }

        // enqueue node's children
        q.push(curr.left);
        q.push(curr.right);
    }

    return false;
}
