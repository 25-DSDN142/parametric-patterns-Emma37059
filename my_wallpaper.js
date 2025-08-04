//your parameter variables go here!
//Diamond perameters
let verticleXline = 100; //verticle line down the middle of diamond
let horizontalYline = 100; // horizontal line across the middle of diamond
let diamondsize = 100; //size of diamond
//fillage
let cornerfillage_width = 75;
let cornerfillage_height = 75;
let extracircle = 20; //yellow circle behind size compared to mini circle
//starshape
let seventyfive_point = 75; 
let onetwentyfive_point = 125; 
let starsize_pos = 175; //how long the star-points are down and right (usually 175)
let starsize_neg = 25; //how long the star-points are up and left (usually 25)

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  //swap these two out for the different tile modes
  //choose glide or glyph (standard) modes
  
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  //flexibility to change this
  pWallpaper.grid_settings.row_offset  = 0;
  //horizontally moves tiles like bricks or on top of each other
}

function wallpaper_background() {
  background(197, 184, 255); // bluecolour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//above is my draw function but it doesn't clear so doesn't reset


//background as a colour changing square
if(diamondsize > 70){ //if diamond is bigger then star, the filling will disapear
  noStroke();
fill(204, 244, 252); // bluecolour
rect(100, 100, 200, 200);
    }else{
noStroke();
fill(255, 208, 184);
rect(100, 100, 200, 200);
  }

//backstar
noStroke();
fill(255, 245, 48); //yellow

beginShape();
vertex(seventyfive_point, seventyfive_point);
vertex(onetwentyfive_point, seventyfive_point);
vertex(100, starsize_neg);
endShape(CLOSE);

beginShape();
vertex(seventyfive_point, seventyfive_point);
vertex(seventyfive_point, onetwentyfive_point);
vertex(starsize_neg, 100);
endShape(CLOSE);

beginShape();
vertex(seventyfive_point, onetwentyfive_point);
vertex(onetwentyfive_point, onetwentyfive_point);
vertex(100, starsize_pos);
endShape(CLOSE);

beginShape();
vertex(onetwentyfive_point, onetwentyfive_point);
vertex(onetwentyfive_point, seventyfive_point);
vertex(starsize_pos, 100);
endShape(CLOSE);

beginShape();
vertex(seventyfive_point, seventyfive_point);
vertex(onetwentyfive_point, seventyfive_point);
vertex(onetwentyfive_point, onetwentyfive_point);
vertex(seventyfive_point, onetwentyfive_point);
endShape(CLOSE);

//fillage circle in corners
if(cornerfillage_width && cornerfillage_height < 175){ //if the main circle is not close to the diamond / small, then a second background circle with appear

  beginShape();

arc(0, 0, cornerfillage_width + extracircle, cornerfillage_height + extracircle, 0, 90); //top left
arc(200, 0, cornerfillage_width + extracircle, cornerfillage_height + extracircle, 90, 180); //top right
arc(0, 200, cornerfillage_width +extracircle, cornerfillage_height + extracircle, 270, 360); //bottom left
arc(200, 200, cornerfillage_width + extracircle, cornerfillage_height + extracircle, 180, 270); //bottom right

endShape(CLOSE);
}

//mini/main circle
fill(255, 179, 205); //light pink
arc(0, 0, cornerfillage_width, cornerfillage_height, 0, 90); //top left
arc(200, 0, cornerfillage_width, cornerfillage_height, 90, 180); //top right
arc(0, 200, cornerfillage_width, cornerfillage_height, 270, 360); //bottom left
arc(200, 200, cornerfillage_width, cornerfillage_height, 180, 270); //bottom right
//x, y is the arc centre, w, h, start and stop //code found on p5.js with tutorial

//diamond
stroke(197, 184, 255) //purple

  if(diamondsize > 70){ //if diamond is bigger then star, the filling will disapear

    noFill();
    
  }else{
    fill(197, 184, 255) //colour of diamond, purple
    
  }

   beginShape(); //making the lines into diamond shape

  vertex(verticleXline, horizontalYline - diamondsize);
  vertex(verticleXline + diamondsize, horizontalYline);
  vertex(verticleXline, horizontalYline + diamondsize);
  vertex(verticleXline - diamondsize, horizontalYline);

  endShape(CLOSE);

}
