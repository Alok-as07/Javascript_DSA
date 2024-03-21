const LinkedList = require('./LinkedListClass')

let linkedList = new LinkedList();

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
linkedList.append(6)
linkedList.append(7)
linkedList.append(8,linkedList.head)

function deletefromLinkedList(head,value){
    let current = head.next;
    let prev = head;

    while(current !== head){
        if(current.data == value ){
            if(head.data == value){
                linkedList.head = current.next;
            }
            prev.next = current.next;
            return 
        }
        prev = current;
        current = current.next;
        if(current.data == value ){
            if(head.data == value){
                linkedList.head = current.next;
            }
            prev.next = current.next;
            return 
        }
    }
}

function print(head){
    if (head === null) return;

    let current = head;
    do {
        console.log(current.data);
        current = current.next;
    } while (current !== head);
}

deletefromLinkedList(linkedList.head,3)
print(linkedList.head)