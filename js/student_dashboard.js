  // Toggle Section
    function showSection(id, btn) {
      // hide all lab sections
      let sections = document.querySelectorAll('.lab-cards');
      sections.forEach(sec => sec.style.display = "none");

      // show the selected section
      document.getElementById(id).style.display = "grid";

      // remove active from all buttons
      let buttons = document.querySelectorAll('.tabs button');
      buttons.forEach(b => b.classList.remove('active'));

      // set active for the clicked button
      btn.classList.add('active');
    }

    function openLab(url) {
      document.getElementById("labFrame").src = url;
      document.getElementById("labModal").style.display = "block";
    }
    function closeLab() {
      document.getElementById("labModal").style.display = "none";
      document.getElementById("labFrame").src = "";
    }
    window.onclick = function (event) {
      let modal = document.getElementById("labModal");
      if (event.target == modal) {
        closeLab();
      }
    }


    /** Chart.js Script **/
    const ctx = document.getElementById('progressChart').getContext('2d');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [65, 35],
          backgroundColor: ['#5A77DF', '#CCD4DE'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }, // disable tooltip for cleaner look
        }
      },
      plugins: [{
        id: 'textCenter',
        beforeDraw(chart) {
          const { width } = chart;
          const { height } = chart;
          const ctx = chart.ctx;
          ctx.restore();
          const fontSize = (height / 6).toFixed(2);
          ctx.font = `${fontSize}px Arial`;
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#333";

          const text = "65%";
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }]
    });
