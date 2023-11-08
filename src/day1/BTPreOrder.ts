function walk(curr: BinaryNode<number> | null, path: number[]): void {
    // base case
    if (!curr) {
        return;
    }

    // recurse
    // pre
    path.push(curr.value);

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];

    walk(head, path);

    return path;
}
