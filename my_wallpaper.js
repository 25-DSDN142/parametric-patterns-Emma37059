//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  //swap these two out for the different tile modes
  //choose glide or glyph (standard) modes
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  //flexibility to change this
  pWallpaper.grid_settings.row_offset  = 0;
  //horizontally moves tiles like bricks or on top of each other
}

function wallpaper_background() {
  background(204, 244, 252); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //tesing
  //rect(40 ,40, rect_width, rect_height);
  //ellipse(20 , 20, 50, 50);
  //rect(120, 120, 30, 20);
  //rect(110, 110, 40, 40);
  //!!reminder parameters, POSITION, SIZE | x = across, y = up and down, width first, then height
  //line(1, 1, 200, 200);
  //!!line parameters... first point x/across, y/vertical, second point x/across, y/vertical
  //!!further down in code, is on top, first line of code is at the bottom
  
  line(50, 50, 50, 150);
  line(50, 150, 150, 150);
  line(150, 150, 150, 50);
  line(150, 50, 50, 50);

  ellipse(100, 100, 100, 100);

  line(1, 1, 50, 50);
  line(200, 200, 150, 150);
  line(1, 1, 50, 150);
  //work left to right!
  line(150, 50, 200, 200);
}