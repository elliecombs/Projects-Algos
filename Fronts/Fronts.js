//3 Parts
class SLLnode { //Singly-linked list node class
    constructor(val){
        this.value = val; //Holds value for this node
        this.next = null; //Points to next code
    }
}

class SLL { //The singly-linked list class
    constructor() { //Starts without nodes
        this.head = null; //Head points to first node
    }
//All methods built into SLL class below
    addFront(value){
        //Create variable newMode = new keyword (name of class)
        //Defining new instance of the class by calling on the constructor
        var newNode = new SLLnode(value);
        //Connect node to the front of the list
        newNode.next = this.head;
        //Points to new head node
        this.head = newNode;
        //Return whole object back
        return this;
    }
    removeFront() {
        if(this.head == null) {
            return this.head;
        }
        var removeNode = this.head; //Variable holds node that we will remove
        this.head = removeNode.next;//Moves head of list to the 2nd node, will become new head when completed
        removeNode.next = null;  
        return this.head;
    }
    //Return the value at the front (head) of the list
    front(){
        //Edge Case list is empty
        //Use ternary operator a one line if statement
        return this.head ? this.head.value : null;
    }
}

var mySLL = new SLL(); 
console.log(mySLL.front());
mySLL.addFront(10);
console.log(mySLL.front());
mySLL.addFront(7);
mySLL.addFront(13);

console.log(mySLL);
mySLL.removeFront();

console.log(mySLL);



