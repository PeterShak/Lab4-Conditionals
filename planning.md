In this, I will have two interacting balls, drawn both with the circle() command. I intend both balls to start at random places and be moving at random and different speeds, but both 
moving quite fast to make it more entertaining to watch. I will create the random position using the random x and y coordinate functions - x = random(height) and y = random(width). I 
will create the random speed using the random velocity function - dx = random(-1,1) and dy = random(-1,1). The computer will know that the objects are touching because the radius/2 of 
each object will be the outer edge of each ball. Then, I will use the if x command we learned in class last week to tell the computer to see if they are interacting - the computer will 
know the yare interacting because the x or y or both coordinates will be intersecting, when taking into account the radius. It will be quite challenging and may require help from you. 
My goal is get to get the balls to bounce off one another when they come in contact with each other in opposite directions. I will do this with the code dx *= -1 or dy *= -1. This will 
essentially "swap" the movement of the balls and make them start moving the opposite direction. 
