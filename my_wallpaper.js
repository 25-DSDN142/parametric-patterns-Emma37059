//your parameter variables go here!
//middle box size
let rect_width  = 20;
let rect_height = 20;
//PBA example
let x_example = 13;
let y_example = 7;

//Diamond perameters
let verticleXline = 100; //verticle line down the middle of diamond
let horizontalYline = 100; // horizontal line across the middle of diamond
let diamondsize = 30; //size of diamond
//fillage
//let cornerfillage_width = 50;
//let cornerfillage_height = 50;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  //swap these two out for the different tile modes
  //choose glide or glyph (standard) modes
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  //flexibility to change this
  pWallpaper.grid_settings.row_offset  = 50;
  //horizontally moves tiles like bricks or on top of each other
}

function wallpaper_background() {
  background(204, 244, 252); //colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//above is my draw function but it doesn't clear so doesn't reset

fill(200,40,200) //colour of diamond 
 

  if(diamondsize ){

    fill(100, 60, 100);
  }else{
    fill(0,255,2)
  }

   beginShape(); //making the lines into diamond shape

  vertex(verticleXline, horizontalYline - diamondsize);
  vertex(verticleXline + diamondsize, horizontalYline);
  vertex(verticleXline, horizontalYline + diamondsize);
  vertex(verticleXline - diamondsize, horizontalYline);

  endShape(CLOSE);


  //ellipse(200, 200, cornerfillage_width, cornerfillage_height);



























//rect (20, 20, x_example, y_example);

// across, down/up, across, downup

//if(y_example > 5){
//because the let=y is bigger than 5 it changes the let=x to 12
//  x = 12

//}














//colour has to be on top of parameter!!!!!!!

  //stroke(252, 162, 176); //RGB pink
  //line(1, 1, 200, 200); //top left
  //line(200, 1, 1, 200); //top right

  //middle box
  //stroke(252, 162, 176); //RGB pink
  //fill(204, 244, 252);
  //rect(90 , 90, rect_width, rect_height);

  //stroke(15, 215, 255); //RGB value
  //fill(15, 215, 255);
  //ellipse(100, 100, ellipse_width, ellipse_height);

  //stroke(252, 162, 176); //RGB pink
  //line(50, 50, 50, 150);
  //line(50, 150, 150, 150);
  //line(150, 150, 150, 50);
  //line(150, 50, 50, 50);

// across, down/up, across, downup

//if statements
//if(ellipse_width > 15){

  //rect(100, 100, 100, 100)

}
//else{
  //ellipse (100, 100, 100, 100)

//}



//}









  //testing
  //rect(40 ,40, rect_width, rect_height);
  //ellipse(20 , 20, 50, 50);
  //rect(120, 120, 30, 20);
  //rect(110, 110, 40, 40);
  //!!reminder parameters, POSITION, SIZE | x = across, y = up and down, width first, then height
  //line(1, 1, 200, 200);
  //!!line parameters... first point x/across, y/vertical, second point x/across, y/vertical
  //!!further down in code, is on top, first line of code is at the bottom
  
  
//diamond
// line(middleX, middleY-size, middleX+size, middleY);
// line(middleX+size, middleY, middleX, middleY+size);
// line(middleX, middleY+size, middleX-size, middleY);
// line(middleX -size, middleY, middleX, middleY-size);
