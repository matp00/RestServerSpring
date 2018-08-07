<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>Strona główna</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <script src="js/app.js" type="text/javascript"></script>
</head>
<body>
<form style="margin-left: 5%">
    <div class="form-group">
        <label>ID: <input class="form-control" type="text" id="id" disabled></label>
    </div>
    <div class="form-group">
        <label>ISBN: <input class="form-control" type="text" name="isbn" id="isbn"></label>
    </div>
    <div class="form-group">
        <label>Title: <input class="form-control" type="text" name="title" id="title"></label>
    </div>
    <div class="form-group">
        <label>Author: <input class="form-control" type="text" name="author" id="author"></label>
    </div>
    <div class="form-group">
        <label>Publisher: <input class="form-control" type="text" name="publisher" id="publisher"></label>
    </div>
    <div class="form-group">
        <label>Type: <input class="form-control" type="text" name="type" id="type"></label>
    </div>
    <div class="form-group">
        <label>
            <button id="submit" type="button">submit</button>
        </label>
        <label>
            <button id="edit" type="button">edit</button>
        </label>
    </div>
</form>

<div id="books" style="margin-left: 5%; margin-top: 2%">

</div>
</body>
</html>