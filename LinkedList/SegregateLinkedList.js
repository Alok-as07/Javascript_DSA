const LinkedList = require('./LinkedListClass')

const linkedlist = new LinkedList();

linkedlist.append(17)
linkedlist.append(15)
linkedlist.append(8)
linkedlist.append(9)
linkedlist.append(2)
linkedlist.append(4)
linkedlist.append(6)

function newSegregate(head){
    let prevEven = null;
    let prev = null;
    let current = head;
    while(current != null ){
        if(current.data %2 == 0){
            if(prevEven == null){
                if(head.data %2 == 0 ){
                    prevEven = current;
                    prev = current;
                }else{
                    prev.next = current.next;
                    current.next = head;
                    prevEven = current;
                    head = current;
                }
                current = prev.next;
            }else{
                if(prevEven.next.data %2 ==0){
                    prevEven = current;
                    prev = current;
                }else{
                    prev.next = current.next;
                    current.next = prevEven.next;
                    prevEven.next = current;
                    prevEven = current;
                }
                current = prev.next;
            }
        }else{
            prev = current;
            current =  current.next;
        }
    }
    return head;
}

linkedlist.head = newSegregate(linkedlist.head)
linkedlist.printList(linkedlist.head)