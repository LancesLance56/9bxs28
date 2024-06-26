document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Calendar Code
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    console.log(currentDay)
    console.log(currentMonth)
    console.log(currentYear)

    const monthYearDisplay = document.getElementById('month-year');
    const calendarBody = document.getElementById('calendar-body');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    function renderCalendar(month, year) {
        calendarBody.innerHTML = '';
        monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let date = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < firstDay) {
                    cell.appendChild(document.createTextNode(''));
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.appendChild(document.createTextNode(date));

                    date++;
                }

                if (new Date().getMonth() === currentMonth && 6*i + j === currentDay + 1) {
                    cell.style.backgroundColor = "yellow"
                    cell.appendChild(document.createElement("br"));
                    cell.appendChild(document.createTextNode("(current date)"))
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});

document.addEventListener('DOMContentLoaded', () => {
    const assignmentContainer = document.getElementById('assignment-cards');

    fetch('assignments.json')
        .then(response => response.json())
        .then(data => {
            const assignments = data.assignments;

            assignments.forEach(assignment => {
                const card = document.createElement('li');
                card.classList.add('card');

                const cardContent = `
                    <h3>${assignment.title}</h3>
                    <p class="card-content">${assignment.description}</p>
                    <p class="card-deadline"><strong>Due Date:</strong> ${assignment.due_date}</p>
                    <button class="show-more-btn">Show More</button>
                `;

                card.innerHTML = cardContent;
                assignmentContainer.appendChild(card);

                const showMoreBtn = card.querySelector('.show-more-btn');
                const cardContentDiv = card.querySelector('.card-content');

                showMoreBtn.addEventListener('click', () => {
                    if (cardContentDiv.classList.contains('expanded')) {
                        cardContentDiv.classList.remove('expanded');
                        showMoreBtn.textContent = 'Show More';
                    } else {
                        cardContentDiv.classList.add('expanded');
                        showMoreBtn.textContent = 'Show Less';
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error fetching assignments:', error);
        });
});



