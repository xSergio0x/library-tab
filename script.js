
const books = [
    { id: 1, title: "Кобзар", author: "Тарас Шевченко", year: 1840,
      genre: "Поезія", isbn: "978-966-01-0001-1", pages: 320, available: true },
    { id: 2, title: "Місто", author: "Валер'ян Підмогильний", year: 1928,
      genre: "Роман", isbn: "978-966-01-0002-2", pages: 280, available: false },
    { id: 3, title: "Тигролови", author: "Іван Багряний", year: 1944,
      genre: "Пригодницький роман", isbn: "978-966-01-0003-3", pages: 350, available: true },
    { id: 4, title: "Захар Беркут", author: "Іван Франко", year: 1883,
      genre: "Історична повість", isbn: "978-966-01-0004-4", pages: 210, available: true }
];

const readers = [
    { id: 1, fullName: "Шевченко Олена Петрівна", birthDate: "1995-03-12",
      phone: "+380501112233", email: "olena@example.com",
      address: "м. Київ, вул. Хрещатик, 1", ticket: "R-1001", regDate: "2021-09-01" },
    { id: 2, fullName: "Коваль Андрій Іванович", birthDate: "1988-07-25",
      phone: "+380672223344", email: "andrii@example.com",
      address: "м. Львів, вул. Свободи, 5", ticket: "R-1002", regDate: "2020-02-15" },
    { id: 3, fullName: "Мельник Ірина Сергіївна", birthDate: "2001-11-03",
      phone: "+380933334455", email: "iryna@example.com",
      address: "м. Одеса, вул. Дерибасівська, 10", ticket: "R-1003", regDate: "2023-05-20" }
];

const loans = [
    { id: 1, readerId: 1, bookId: 2, issueDate: "2024-05-01",
      dueDate: "2024-05-15", returnDate: null, status: "Активна" },
    { id: 2, readerId: 2, bookId: 1, issueDate: "2024-04-10",
      dueDate: "2024-04-24", returnDate: "2024-04-22", status: "Повернено" },
    { id: 3, readerId: 3, bookId: 3, issueDate: "2024-05-10",
      dueDate: "2024-05-24", returnDate: null, status: "Прострочена" }
];


function findReaderById(id) {
    for (let i = 0; i < readers.length; i++) {
        if (readers[i].id === id) return readers[i];
    }
    return null;
}

function findBookById(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) return books[i];
    }
    return null;
}

function createCell(text) {
    const td = document.createElement("td");
    td.textContent = text;
    return td;
}


function renderBooks() {
    const tbody = document.getElementById("books-body");
    tbody.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        const b = books[i];
        const tr = document.createElement("tr");
        tr.appendChild(createCell(b.id));
        tr.appendChild(createCell(b.title));
        tr.appendChild(createCell(b.author));
        tr.appendChild(createCell(b.year));
        tr.appendChild(createCell(b.genre));
        tr.appendChild(createCell(b.isbn));
        tr.appendChild(createCell(b.pages));
        tr.appendChild(createCell(b.available ? "Так" : "Ні"));
        tbody.appendChild(tr);
    }
}

function renderReaders() {
    const tbody = document.getElementById("readers-body");
    tbody.innerHTML = "";

    for (let i = 0; i < readers.length; i++) {
        const r = readers[i];
        const tr = document.createElement("tr");
        tr.appendChild(createCell(r.id));
        tr.appendChild(createCell(r.fullName));
        tr.appendChild(createCell(r.birthDate));
        tr.appendChild(createCell(r.phone));
        tr.appendChild(createCell(r.email));
        tr.appendChild(createCell(r.address));
        tr.appendChild(createCell(r.ticket));
        tr.appendChild(createCell(r.regDate));
        tbody.appendChild(tr);
    }
}

function renderLoans() {
    const tbody = document.getElementById("loans-body");
    tbody.innerHTML = "";

    for (let i = 0; i < loans.length; i++) {
        const l = loans[i];
        const reader = findReaderById(l.readerId);
        const book = findBookById(l.bookId);

        const tr = document.createElement("tr");
        tr.appendChild(createCell(l.id));
        tr.appendChild(createCell(reader ? reader.fullName : "—"));
        tr.appendChild(createCell(book ? book.title : "—"));
        tr.appendChild(createCell(l.issueDate));
        tr.appendChild(createCell(l.dueDate));
        tr.appendChild(createCell(l.returnDate ? l.returnDate : "—"));
        tr.appendChild(createCell(l.status));
        tbody.appendChild(tr);
    }
}


function initTabs() {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            const target = this.getAttribute("data-tab");

            for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove("active");
            }
            for (let j = 0; j < contents.length; j++) {
                contents[j].classList.remove("active");
            }

            this.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    }
}


renderBooks();
renderReaders();
renderLoans();
initTabs();