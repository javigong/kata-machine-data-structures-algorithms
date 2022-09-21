type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>; // create new node
        this.length++;
        if (!this.tail) { // if tail is undefined add new node as tail and head
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node; // add to current tail next to the new node
        this.tail = node; // update new tail pointing to the new node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        if (this.length === 0) {
            this.tail = undefined;
        }

        const head = this.head; // save the head
        this.head = this.head.next; // update the head

        // free (for some lang without garbage collector)
        head.next = undefined;
        
        return head.value; // return head value
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
