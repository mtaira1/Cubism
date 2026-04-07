//https://www.youtube.com/watch?v=vNba3jbBSOw

// Variables
PImage boatImage;

// Constants
int Y_AXIS = 1;
int X_AXIS = 2;
color outlineColor, c1, c2;

void setup(){
    size(425,800);
    
    boatImage = loadImage("cubeimage.png" );
    // Define colors
    outlineColor = color(0,250,255);
    c1 = color(187, 222, 251);
    c2 = color(31, 52, 171);
}

void draw(){
        //hold the space bar or press the mouse button to see the original image of the origami boat
        int b = ((keyPressed && key == ' ' )|| mousePressed) ? 1 : 0;
        int m = (mousePressed) ? 1 : 0;
        image(boatImage, 0, 0);
        switch (b) {
        case 1:
            
            break; // Exits the switch statement
        case 0:
            // fill(25);
            // setGradient(0, 0, width, height, c1, c2, Y_AXIS);
            // setGradient(50, 190, width, height, c2, c1, X_AXIS);
            break;
        // ...
        default:
            // code block for no match
        }

        if(m==0){
            noFill();
            beginShape();
                stroke(outlineColor);
                strokeWeight(4);
                fill(#e6b871);
                vertex( 3 , 351 );
                vertex( 103 , 246 );
                vertex( 107 , 364 );
                vertex( 2 , 362 );
            endShape(CLOSE);
            beginShape();
                strokeWeight(4);
                stroke(outlineColor);
                vertex( 106 , 363 );
                vertex( 106 , 442 );
                vertex( 2  , 440 );
                vertex( 1 , 363 );
            
            endShape();
            beginShape();
                strokeWeight(4);
                stroke(outlineColor);
            endShape();
            beginShape();
                strokeWeight(4);
                stroke(outlineColor);
                vertex( 418 , 4 );
                vertex( 154 , 648 );
            endShape();
            beginShape();
                strokeWeight(4);
                stroke(outlineColor);
                vertex( 107 , 446 );
                vertex( 101 , 798 );
            endShape();
            beginShape();
                strokeWeight(4);
                stroke(outlineColor);
                // vertex( 633 , 522 );
                // vertex( 299 , 633 );
            endShape();
            beginShape();
                strokeWeight(4);
                stroke(outlineColor);
                vertex( 1 , 647 );
                vertex( 422 , 661 );
                vertex( 1 , 682 );
                vertex( 423 , 694 );

        
            endShape();

                beginShape();
                 vertex( 108 , 440 );
                    vertex( 107 , 393 );
                    vertex( 422 , 402 );
                vertex( 424 , 452 );

                endShape();

                beginShape();
                vertex( 104 , 244 );
                vertex( 277 , 36 );
                endShape();

beginShape();
                vertex( 187 , 652 );
vertex( 375 , 305 );
vertex( 192 , 649 );
endShape();
        }
         noFill();
}  

void setGradient(int x, int y, float w, float h, color c1, color c2, int axis ) {
  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (int i = y; i <= y+h; i++) {
      float inter = map(i, y, y+h, 0, 1);
      color c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
}

void mouseClicked(){
    println("vertex(",mouseX,",",mouseY,");");
}