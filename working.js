////////////////////////////////////////////////////////////////////////////////
// loading the grid when the user clicks the submit button
$('#sizePicker').submit(function(event) {
  if (loopRun == 1) { // removing the old grid to make new grid
    $('#pixelCanvas').empty("#pixelCanvas");
    loopRun = 0;
    makeGrid();
  } else { // making initial grid
    makeGrid();
  }
});
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// allowing user to color the canvas or removing color from the canvas
$('#pixelCanvas').on('click', 'td', function(){ //coloring a cell
  var colorPickerValue = $('#colorPicker').val();
  $(this).css('background-color', colorPickerValue);
});

$('#pixelCanvas').on('dblclick', 'td', function(){ //removing color from the cell
    $(this).css('background-color', $('body').css('background-color'));
});
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// allowing user to color via dragging the cursor
var mouseDown = 0;
$('#pixelCanvas').on("mousedown", function() {
  mouseDown = 1;
});

$('body').on("mouseup", function() {
  mouseDown = 0;
});

$('#pixelCanvas').on("mouseover", "td", function(e) {
  if (mouseDown == 1) {
    var colorPickerValue = $('#colorPicker').val();
    $(this).css("background", colorPickerValue);
  }
});
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// this is what is called to make user specified N by M grid
var loopRun = 0; // using loopRun to reset the grid if the user want to make a new size grid
var column = '<td></td>'; // creating a column cell
var columns = ''; // empty column string

function makeGrid() {
    var rowValue = $('#inputHeight').val(); // getting the number of rows the user wants
    var columnValue = $('#inputWidth').val(); //  getting the number of columns the user wants

    loopRun += 1; // setting loopRun value to 1

    for (var i=1; i <= rowValue; i++) {
      for (var j=1; j <= columnValue; j++) {
        columns = columns + column;
      }
      var rows = $('<tr>' + columns+ '</tr>'); // adding the all of the columns generated from the for loop to the i-th row.
      $('#pixelCanvas').append(rows); // appending all of the columns that were generated for the i-th row.
      columns = ''; // setting the columns string to empty again to make new grid column for the next row.
    }
    event.preventDefault(); // preventing the submit button to refreshing the page
};
////////////////////////////////////////////////////////////////////////////////
