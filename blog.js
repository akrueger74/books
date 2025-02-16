document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("search-btn");
    const filterGenre = document.getElementById("filter-genre");
    const books = document.querySelectorAll(".book");

    function searchBooks() {
        const query = searchInput.value.toLowerCase();
        books.forEach(book => {
            const title = book.getAttribute("data-title").toLowerCase();
            if (title.includes(query)) {
                book.style.display = "grid";
            } else {
                book.style.display = "none";
            }
        });
    }

    function filterBooks() {
        const genre = filterGenre.value;
        books.forEach(book => {
            if (genre === "all" || book.getAttribute("data-genre") === genre) {
                book.style.display = "grid";
            } else {
                book.style.display = "none";
            }
        });
    }

    searchBtn.addEventListener("click", searchBooks);
    searchInput.addEventListener("input", searchBooks);
    filterGenre.addEventListener("change", filterBooks);
});
