$(function () {
    showBooks();
    $("#submit").on("click", addBook);

    $("#edit").on("click", editBook);
});


function showBook(id) {
    $.ajax({
        url: "/books/" + id,
        data: {},
        type: "GET",
        dataType: "json",
        success: displayBook,
    });

    function displayBook(book) {
        let div = $("<div>").addClass("card").style("width: 18rem;");
        let id = $("<div>").addClass("card-header").text("Id# ").text(elem.id);
        let isbn = $("<p>").text(elem.isbn);
        let title = $("<p>").text(elem.title);
        let author = $("<p>").text(elem.author);
        let publisher = $("<p>").text(elem.publisher);
        let type = $("<p>").text(elem.type);
        div.append(id).append(isbn).append(isbn).append(title).append(author).append(publisher).append(type);
        $("#books").append(div);
    }

}

function showBooks() {
    $.ajax({
        url: "/books/",
        data: {},
        type: "GET",
        dataType: "json",
        success: displayBooks,
    });


    function displayBooks(books) {
        $("#books").empty();

        for (elem of books) {
            let div = $("<div>").addClass("card").css("width", "30%").css("margin-top", "2%");
            let id = $("<div>").addClass("card-header").text("Id# " + elem.id);
            let ul = $("<ul>").addClass("list-group list-group-flush");
            let liIsbn = $("<li>").addClass("list-group-item").text(elem.isbn);
            let liTitle = $("<li>").addClass("list-group-item").text(elem.title);
            let liAuthor = $("<li>").addClass("list-group-item").text(elem.author);
            let liPublisher = $("<li>").addClass("list-group-item").text(elem.publisher);
            let liType = $("<li>").addClass("list-group-item").text(elem.type);
            let button = $("<button>").attr("type","button")
                .css("width", "100px").data("id", elem.id).text("delete");
            let button2 = $("<button>").attr("type","button")
                .css("width", "100px").data("book", elem).text("edit");


            button.on("click", function () {
                deleteBook($(this).data("id"));
            });


            button2.on("click", function () {
                let book = $(this).data("book");
                $("#id").val(book.id);
                $("#isbn").val(book.isbn);
                $("#title").val(book.title);
                $("#author").val(book.author);
                $("#publisher").val(book.publisher);
                $("#type").val(book.type);
            });

            ul.append(liIsbn).append(liTitle).append(liAuthor).append(liPublisher).append(liType)
            div.append(id).append(ul).append(button).append(button2);
            $("#books").append(div);
        }
    }

}

function deleteBook(id) {
    $.ajax({
        url: "/books/"+id,
        data: {},
        type: "DELETE",
        dataType: "json",
        success: function (json) {
        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
            showBooks();
        }
    });
}

function editBook() {

    let id =  $("#id").val();
    let isbn = $("#isbn").val();
    let title = $("#title").val();
    let author = $("#author").val();
    let publisher = $("#publisher").val();
    let type = $("#type").val();
    let book = {id, isbn, title, author, publisher, type};


    $.ajax({
        headers: {
            'Content-Type': 'application/json'
        },
        url: "/books/"+book.id,
        data: JSON.stringify(book),
        type: "PUT",
        dataType: "json",
        success: function (json) {
        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
            showBooks();
        }
    });
}




function addBook() {
    let isbn = $("#isbn").val();
    let title = $("#title").val();
    let author = $("#author").val();
    let publisher = $("#publisher").val();
    let type = $("#type").val();
    let book = {isbn, title, author, publisher, type};

    $.ajax({
        headers: {
            'Content-Type': 'application/json'
        },
        url: "/books",
        data: JSON.stringify(book),
        type: "POST",
        dataType: "json",
        success: function (json) {
        },
        error: function (xhr, status,
                         errorThrown) {
        },
        complete: function (xhr, status) {
            showBooks();
        }
    });
}