import { Component } from 'react';

class Neuron {
	constructor(x, y, r, color, context) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = color;
		this.context = context;
		this.angle = 0;
	}

	rotate = (firstNeuron) => {
		let deltaX = Math.abs(this.x - firstNeuron.x);
		let deltaY = Math.abs(this.y - firstNeuron.y);
		let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

		this.angle += Math.PI / 180;
		this.x = firstNeuron.x + distance * Math.cos(this.angle);
		this.y = firstNeuron.y + distance * Math.sin(this.angle);
		this.draw();
	}

	draw = () => {
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
		this.context.fillStyle = this.color;
		this.context.fill();
		this.context.stroke();
		this.context.closePath();
	}
}

class OuterNeuron {
	constructor(firstNeuron, context, r, color) {
		this.theta = Math.random() * 2 * Math.PI;
		this.phi = Math.acos((Math.random() * 2) - 1);
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.r = r;

		this.xProj = 0;
		this.yProj = 0;
		this.scale = 0;	

		this.dist_ratio = Math.random() + 0.1;

		this.centreX = firstNeuron.x;
		this.centreY = firstNeuron.y;

		this.context = context;
		this.color = color;
		this.connect = new Connection(firstNeuron, context, this);
	}

	project(sphere_r, persp) {
		this.x = sphere_r * this.dist_ratio * Math.sin(this.phi) * Math.cos(this.theta);
		this.y = sphere_r * this.dist_ratio * Math.cos(this.phi);
		this.z = sphere_r * (this.dist_ratio * Math.sin(this.phi) * Math.sin(this.theta) + 1);

		this.scale = persp / (persp + this.z);

		this.xProj = (this.x * this.scale) + this.centreX;
		this.yProj = (this.y * this.scale) + this.centreY;
	}

	rotate(x_rad, y_rad) {
		//this.phi -= x_rad;
		this.theta += y_rad;
	}

	draw(sphere_r, persp, x_rad, y_rad) {
		this.rotate(x_rad, y_rad);
		this.project(sphere_r, persp);
		this.context.globalAlpha = Math.abs(1 - this.z / (this.centreX * 2));
		this.context.beginPath();
		this.context.arc(this.xProj, this.yProj, this.r * this.scale, 0, 2 * Math.PI, true);
		this.context.fillStyle = this.color;
		this.context.fill();
		this.context.stroke();
		this.context.strokeStyle = this.color;
		this.context.closePath();
		this.connect.draw(persp, x_rad, y_rad, sphere_r*this.dist_ratio);
	}
}

class Connection {
	constructor(firstNeuron, context, outerNeuron) {
		this.startX = firstNeuron.x;
		this.startY = firstNeuron.y;
		this.theta = outerNeuron.theta;
		this.phi = outerNeuron.phi; 

		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.length = 5;

		this.xProj = 0;
		this.yProj = 0;
		this.scale = 0;

		this.context = context;
		this.color = outerNeuron.color;

		this.centreX = firstNeuron.x;
		this.centreY = firstNeuron.y;
	}

	project(persp) {
		this.x = this.length * Math.sin(this.phi) * Math.cos(this.theta);
		this.y = this.length * Math.cos(this.phi);

		this.scale = persp / (persp + this.z); 
		this.xProj = (this.x * this.scale) + this.startX;
		this.yProj = (this.y * this.scale) + this.startY;
	}

	rotate(x_rad, y_rad) {
		//this.phi -= x_rad;
		this.theta += y_rad;
	}

	move(persp, x_rad, y_rad) {
		this.startX += 0.5 * this.length * Math.sin(this.phi) * Math.cos(this.theta);
		this.startY += 0.5 * this.length * Math.cos(this.phi);
		this.project(persp);
	}

	dist(x_coord, y_coord) {
		return Math.sqrt(Math.pow(Math.abs(x_coord - this.centreX), 2) + Math.pow(Math.abs(y_coord - this.centreY), 2));
	}

	draw(persp, x_rad, y_rad, coordinates) {
		this.context.beginPath();
		this.context.moveTo(this.startX, this.startY); 
		this.move(persp, x_rad, y_rad);
		if (this.dist(this.xProj, this.yProj) >= coordinates * 0.9) {
			this.startX = this.centreX;
			this.startY = this.centreY;
		} else{
			this.context.strokeStyle = this.color;
		}
		this.context.lineTo(this.xProj, this.yProj);
		this.context.stroke();
		this.context.closePath();
	}
}

function createNeurons(startx, starty, radius, color, context) {
	let neurons = [];
	let centreNeuron = new Neuron(startx, starty, radius, 'orange', context);
	neurons.push(centreNeuron);
	for (let i = 0; i < 150; ++i)
		neurons.push(new OuterNeuron(centreNeuron, context, radius, color));
	return neurons;
}


class Neural extends Component {

    componentDidMount() {
        const RADIUS = 5;
        let X_RAD = Math.PI / 540;
        let Y_RAD = Math.PI / 720;

        const c = document.getElementById("neural");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        const ctx = c.getContext("2d");
        window.addEventListener('resize', function() {
            let dimensions = onResize(c);
            c.width = dimensions[0];
            c.height = dimensions[1];
        });

        const START_X = c.width / 2;
        const START_Y = c.height / 2;

        let SPHERE_R = c.width / 4;
        let PERSPECTIVE = c.width * 0.8;

        const neurons = createNeurons(START_X, START_Y, RADIUS, '#01579b', ctx);
        animate(ctx, c, neurons, SPHERE_R, PERSPECTIVE, c);

        function onResize() {
            let dimensions = [window.innerWidth, window.innerHeight];
            return dimensions;
        }

        function animate(context, canvas, neurons, sphere_r, persp, c) {

            requestAnimationFrame(function() { animate(context, canvas, neurons, sphere_r, persp, c); });
            context.clearRect(0, 0, canvas.width, canvas.height);

            let dimensions = onResize(c);
            c.width = dimensions[0];
            c.height = dimensions[1];

            let firstNeuron = neurons[0];
            for (let i = 1; i < neurons.length; ++i) {
                neurons[i].draw(sphere_r, persp, X_RAD, Y_RAD);
            }
            neurons.sort((n1, n2) => {
                return n1.scale - n2.scale;
            });
            for (let i = 1; i < neurons.length; ++i) {
                neurons[i].draw(sphere_r, persp, X_RAD, Y_RAD);
            }
            firstNeuron.rotate(firstNeuron);

        }
    }

    render() {
        return(
            <div className="content-wrap">
                <canvas id="neural"></canvas>
            </div>
        )
    }
}

export default Neural

