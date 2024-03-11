class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    append(data, value) {
        const newNode = new Node(data, value ? value : null);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }

        current.next = newNode;
    }

    printList() {
        let current = this.head;
        let linkedlistArray = [];
        while (current != null) {
            linkedlistArray.push[current.data]
            console.log(current.data)
            current = current.next;
        }
        return linkedlistArray
    }
}

module.exports = LinkedList;
