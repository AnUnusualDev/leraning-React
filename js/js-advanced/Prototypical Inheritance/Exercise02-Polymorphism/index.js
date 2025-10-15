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
    this.render = function(){
        return `
<select>${this.items.map( item => `
    <option>${item}</option>`).join('')}
<select>`;
    }
}

function HtmlImageElement(url){
    this.url = url;
    this.render = function(){
        return `<img src="${url}" />`;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.constructor = HtmlSelectElement;

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.constructor = HtmlImageElement;

const elements = [
     s = new HtmlSelectElement(['1', '2', '3']),
     i = new HtmlImageElement('https://apple.at')
];

for (element of elements){
    console.log(element.render());
}