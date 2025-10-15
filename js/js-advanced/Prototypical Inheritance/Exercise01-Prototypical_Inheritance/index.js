function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focused');
}


function HtmlSelectElement(items = []){
    this.items = items;
    this.addItem = function(item){
        this.items.push(item);
    }
    this.removeItem = function(item){
        this.items = this.items.filter(element => element !== item);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
