class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    removeFront(){
        if(this.head == null){
            return this.head;
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }
    front(){
        return this.head ? this.head.value : null;
    }
    display(){ //Empty string to contain value of the list
        var listStr = "";
        //Edge case
        if (this.head == null){
            return "Empty list";
        }
        //One node
        listStr += this.head.value; //Concatenates teh first value in the list
        //Second node onwards  will add "," + value;
        var runner = this.head.next;
        while (runner != null){
            listStr += ", " + runner.value; //Add node's value to list
            runner = runner.next; //Move runner to next node
        }
        return listStr;
    }
}

var mySLL = new SLL(); //Starts off with an empty list
console.log(mySLL.display());
mySLL.addFront(7);

// console.log(mySLL);
// mySLL.removeFront();

console.log(mySLL);