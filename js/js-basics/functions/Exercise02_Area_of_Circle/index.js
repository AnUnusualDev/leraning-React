
const circle = {
    radius: 2,
    get area(){
        return (this.radius*this.radius * Math.PI).toFixed(2);
    }
};

console.log(circle.area);