function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}
// Draw the class performance line chart on canvas with basic shapes in the container
  const canvas = document.getElementById('classPerformanceChart');
  const ctx = canvas.getContext('2d');

  // Data points for last 7 days performance trend - sample values
  const points = [
    { x: 10, y: 60 },
    { x: 40, y: 45 },
    { x: 70, y: 65 },
    { x: 100, y: 40 },
    { x: 130, y: 50 },
    { x: 160, y: 35 },
    { x: 190, y: 45 },
    { x: 200, y: 40 }
  ];
  const lineColor = '#ffffffff';
  const fillColor = 'rgba(255, 255, 255, 0.28)';

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for(let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Fill under the line
  ctx.lineTo(points[points.length-1].x, canvas.height);
  ctx.lineTo(points[0].x, canvas.height);
  ctx.closePath();
  ctx.fillStyle = fillColor
  ctx.fill();