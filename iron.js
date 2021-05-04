class Iron{
	constructor(x,y,width,height)
	{
	
	var options={
		restitution:0.8,
		friction:3,
		density:30
	}
		this.x=x;
		this.y=y;
		this.width=width
        this.height=height
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;	
            var angle=this.body.angle;	
			push()
			translate(ironpos.x, ironpos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("silver");
			
			rect(0,0,this.width,this.height)
			
			pop()
	}

}