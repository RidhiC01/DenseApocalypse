// Sample events data
const events = [
    { id: 1, name: 'Tech Conference', date: '2023-06-15', targetFunds: 5000, fundsRaised: 3200 },
    { id: 2, name: 'Science Fair', date: '2023s-07-20', targetFunds: 3000, fundsRaised: 1500 },
    { id: 3, name: 'Art Exhibition', date: '2024-08-10', targetFunds: 7000, fundsRaised: 6000 },
    // Add more events as needed
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    const liveEventsContainer = document.querySelector('.live-events');
    const pastEventsContainer = document.querySelector('.past-events');
  
    // Display live events and past events
    function displayEvents() {
      liveEventsContainer.innerHTML = '';
      pastEventsContainer.innerHTML = '';
      const currentDate = new Date();
      events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        const eventDate = new Date(event.date);
        const progress = (event.fundsRaised / event.targetFunds) * 100;
        if (eventDate > currentDate) {
          eventItem.classList.add('live-event');
          eventItem.innerHTML = `
            <h4>${event.name}</h4>
            <p>Date: ${event.date}</p>
            <div class="progress-bar">
              <div class="progress" style="width: ${progress}%">${event.fundsRaised} / ${event.targetFunds} raised</div>
            </div>
          `;
          liveEventsContainer.appendChild(eventItem);
        } else {
          eventItem.classList.add('past-event');
          eventItem.innerHTML = `
            <h4>${event.name}</h4>
            <p>Date: ${event.date}</p>
            <div class="progress-bar">
              <div class="progress" style="width: ${progress}%">${event.fundsRaised} / ${event.targetFunds} raised</div>
            </div>
          `;
          pastEventsContainer.appendChild(eventItem);
        }
      });
    }
  
    // Initialize the page
    displayEvents();
  });
  