function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

class Rectangle {
    constructor(ctx, listId, width, height, x, y, color) {
        this.ctx = ctx;
        this.listId = listId;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
        this.name = 'Dreptunghi';
    }

    draw() {
        this.ctx.fillStyle = this.color;
        
        // Desenăm dreptunghiul
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
    }

    reportArea() {
        let listItem = document.createElement('li');
        listItem.innerHTML = `${this.name}: arie este ${Math.round(this.width * this.height)}px <sup>2</sup>.`;

        let list = document.getElementById(this.listId);
        list.appendChild(listItem);
    }

    reportPerimeter() {
        let listItem = document.createElement('li');
        listItem.textContent = `${this.name}: perimetrul este ${2 * (this.width + this.height)}px.`;

        let list = document.getElementById(this.listId);
        list.appendChild(listItem);
    }
}

export { Rectangle };
