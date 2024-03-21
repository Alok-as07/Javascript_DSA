class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class CircularLinkedList {
    constructor(head) {
        this.head = null
    }

    addLast(data, value) {
        const NewNode = new Node(data, value);
        if (this.head == null) {
            this.head = NewNode;
            return;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = NewNode;
    }

    print() {
        if (this.head === null) return;
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
            if (current == null) {
                return
            }
        } while (current !== this.head);
    }

    checkIscircular() {
        let current = this.head;
        if (this.head == null) return false;
        do {
            current = current.next;
            if (current == this.head) {
                return true;
            }
        } while (current != null && current != this.head);
        return false;
    }
}

const linkedList = new CircularLinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5)
console.log(linkedList.checkIscircular())