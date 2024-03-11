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

const linkedList = new LinkedList();

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(5)
linkedList.append(6)
linkedList.append(7, linkedList.head.next.next.next)

// linkedList.printList();

/* above was broiler plate code*/

// this is Hasmap methos where T.C is O(N+logN) and S.C is O(N);
    function DetectloopByHashMap(head) {
        const hsmap = new Map();
        let temp = head;
        while (temp.next != null) {
            if (hsmap.has(temp)) {
                return true;
            }

            hsmap.set(temp, 1)
            temp = temp.next;
        }
        return false;
    }

// this is tortois and here method T.C O(N) and S.C is O(1)
    function optimalApproach(head){
        let slow = head;
        let fast = head;
        while(fast !=null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                return true
            }
        }
        return false;
    }

console.log(optimalApproach(linkedList.head))