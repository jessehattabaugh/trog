const canvas = document.querySelector('main canvas');
const size = parseInt(canvas.width);
const grid = size / 16;
const ctx = canvas.getContext('2d');

module.exports = function draw(frame) {
  ctx.clearRect(0, 0, size, size);
  
  // frame counter
  var font = 10;
  ctx.font = font + 'px';
  ctx.fillText(frame.id, 0, font);
  
  // draw grid
  for(let x = 0; x < size; x += grid) {
    for(let y = 0; y < size; y += grid) {
      //ctx.strokeRect(x, y, grid, grid);
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + grid, y);
      //ctx.stroke();
    }  
  }
  
  // draw dots
  for(let x = 0; x <= size; x += grid) {
    for(let y = 0; y <= size; y += grid) {
      ctx.fillStyle = 'red';
      ctx.fillRect(
        x != size ? x: x - 1, 
        y != size ? y: y - 1, 
        1, 
        1
      );
    }  
  }
  
}