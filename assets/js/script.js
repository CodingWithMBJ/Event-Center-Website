document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");
  const mainEvent = document.getElementById("event-main");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("opened");
      menuBtn.innerHTML = nav.classList.contains("opened")
        ? `<i class="fa-solid fa-circle-xmark"></i>`
        : `<i class="fa-solid fa-bars"></i>`;
    });
  }

  if (!mainEvent) return;

  const section = document.createElement("section");
  mainEvent.appendChild(section);

  const tableHtml = `
    <table id="schedule" class="schedule">
      <caption>Our Schedule</caption>
      <thead>
        <tr>
          <th></th>
          <th>6am-1pm</th>
          <th>2pm-4pm</th>
          <th>5pm-6pm</th>
          <th>7pm-8pm</th>
          <th>8:15pm-9pm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Sunday</th>
          <td>Underwater Tour</td>
          <td>Children Book Reading</td>
          <td>Meeting The Authors</td>
          <td>Reading Games & Books Giveaway</td>
          <td>New Previews & Closing Remarks</td>
        </tr>
        <tr>
          <th scope="row">Monday</th>
          <td>Underwater Tour</td>
          <td>Children Book Reading</td>
          <td>Meeting The Authors</td>
          <td>Reading Games & Books Giveaway</td>
          <td>New Previews & Closing Remarks</td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>Underwater Tour</td>
          <td>Children Book Reading</td>
          <td>Meeting The Authors</td>
          <td>Reading Games & Books Giveaway</td>
          <td>New Previews & Closing Remarks</td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>Underwater Tour</td>
          <td>Children Book Reading</td>
          <td>Meeting The Authors</td>
          <td>Reading Games & Books Giveaway</td>
          <td>New Previews & Closing Remarks</td>
        </tr>
        <tr>
          <th scope="row">Thursday</th>
          <td>Underwater Tour</td>
          <td>Children Book Reading</td>
          <td>Meeting The Authors</td>
          <td>Reading Games & Books Giveaway</td>
          <td>New Previews & Closing Remarks</td>
        </tr>
        <tr>
          <th scope="row">Friday</th>
          <td>Closed</td><td>Closed</td><td>Closed</td><td>Closed</td><td>Closed</td>
        </tr>
        <tr>
          <th scope="row">Saturday</th>
          <td>Underwater Tour</td>
          <td>Children Book Reading</td>
          <td>Meeting The Authors</td>
          <td>Reading Games & Books Giveaway</td>
          <td>New Previews & Closing Remarks</td>
        </tr>
      </tbody>
    </table>
  `;

  const link = document.createElement("a");
  link.href = "/Schedule.pdf";
  link.textContent = "View The Schedule";
  link.className = "downloadSc";

  function renderSchedule() {
    if (window.innerWidth < 992) {
      section.innerHTML = "";
      section.appendChild(link);
    } else {
      section.innerHTML = tableHtml;
    }
  }

  renderSchedule();

  window.addEventListener("resize", renderSchedule);
});
