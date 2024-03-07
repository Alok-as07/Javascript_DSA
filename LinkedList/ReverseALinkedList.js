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


const linkedList = new LinkedList();
linkedList.append(6)
linkedList.append(7)
linkedList.append(5)
linkedList.append(4)
linkedList.append(10)

// linkedList.printList();


function reversLinkedListIterative(head){
    let current = head;
    let previous = null;
    while(current != null){
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    return previous;
}

function reverseLinkedListByRecursion(head){
    if(head == null || head.next == null){
        return head;
    }
    let newHead =  reverseLinkedListByRecursion(head.next)
    let headNext = head.next;
    headNext.next = head;
    head.next = null;
    return newHead;
}

// linkedList.head = reversLinkedListIterative(linkedList.head)
linkedList.head = reverseLinkedListByRecursion(linkedList.head)
console.log("answer is after reverse")
linkedList.printList();
