// LinkedList: 1->2->2->4->5->6->7->8
// K = 4
// Output: 4 2 2 1 8 7 6 5 
class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }

        current.next = newNode;
    }

    printList(){
        let current = this.head;
        let linkedlistArray = [];
        while(current != null){
            linkedlistArray.push[current.data]
            console.log(current.data)
            current = current.next;
        }
        return linkedlistArray
    }
}

function reverseBySize(head, k) {
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;

    // Reverse first k nodes of the linked list
    while (current != null && count < k) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }

    // Next is now a pointer to (k+1)th node. Recursively call for the list starting from current and make rest of the list as next of first node
    if (next != null) {
        head.next = reverseBySize(next, k);
    }

    // Prev is new head of the input list
    return prev;
}


const linkedlist = new LinkedList()

linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(2)
linkedlist.append(4)
linkedlist.append(5)
linkedlist.append(6)
linkedlist.append(7)
linkedlist.append(8)

linkedlist.head = reverseBySize(linkedlist.head, 4);
linkedlist.printList();