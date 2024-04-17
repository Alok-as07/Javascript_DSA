class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode = new Node(data)
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertnode(this.root , newNode)
        }
    }

    insertnode(node,newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertnode(node.left , newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertnode(node.right , newNode)
            }
        }
    }

    heightofTree(){
        return this.calculateHeight(this.root);
    }
    
    calculateHeight(node){
        if(node === null){
            return -1;
        }
        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);
        
        return Math.max(leftHeight,rightHeight)+1;
    }
}

const binarytree = new BinaryTree();

binarytree.insert(10)
binarytree.insert(5)
binarytree.insert(15)
binarytree.insert(3)
binarytree.insert(7)
binarytree.insert(6)
console.log(binarytree.root.left.right)
console.log(binarytree.heightofTree())