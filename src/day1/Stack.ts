type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head; // new node prev points to head
        this.head = node; // update head pointing to new node
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as Node<T>; // save head
        this.head = head.prev // update new head

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
