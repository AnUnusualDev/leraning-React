
class Stack {
    #items = [];

    get count(){
        return this.#items.length;
    }

    pop(){
        if (this.#items.length === 0) throw new Error('Stack is empty.');
        return this.#items.pop();
    }

    push(item){
        this.#items.push(item);
    }

    peek(){
        if (this.#items.length === 0) throw new Error('Stack is empty.');
        return this.#items[this.#items.length-1];
    }

}

const s = new Stack();
