class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    addLast(value){
        const NewNode = new Node(value);
        if(this.head === null){
            this.head = NewNode;
            return;
        }
        let current =  this.head;
        while(current.next){
            current = current.next;
        }
        current.next = NewNode;
    }
}

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.addLast(5)
list1.addLast(4)

list2.addLast(5)
list2.addLast(4)
list2.addLast(3)

function reverse(head){
    let prev = null
    let current =  head;
    while(current !== null){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev
}

function addTwoNumber(head1,head2){
    let dummy = new Node(0);
    let current = dummy;
    let carry = 0;
    let l1 = head1;
    let l2 = head2;
    console.log(dummy)
    while(l1 !== null || l2 !== null){
        let x = l1!==null ?l1.data:0;
        let y = l2!==null ? l2.data:0;
        sum = x+y+carry;
        carry = Math.floor(sum/10);
        current.next = new Node(sum%10);
        current = current.next;

        if(l1 !== null) l1 =  l1.next;
        if(l2 !== null) l2 =  l2.next;
    }

    if(carry >0){
        current.next = new Node(carry);
    }
    console.log(dummy.next)
    return dummy.next;
}

const Ans = addTwoNumber(list1.head,list2.head)  // for number 45 and 345 ( consider number as reverse of linkedList )
console.log(reverse(Ans))