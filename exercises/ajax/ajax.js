$.get("http://api.vschool.io/terry/todo", function (response) {
    var todos = response;

    for (var i = 0; i < todos.length; i++) {
        $("#todos").append(`<li>
                           
                           <h4>${todos[i].name}</h4>
                           <h6>${todos[i].class}</h6>
                           <p>${todos[i].title}</p>
                           <button class="btn delete" type="button">x</button>
                           </li>`);
    }
});


$("#sumit").click(function () {

    var newTodo = {};
    newTodo.title = $("#title").val();
    newTodo.title = $("#title").val();
    newTodo.title = $("#title").val();




    $.post("http://api.vschool.io/terry/todo")


})


//create(POST)




//Delete(DESTROY)
//get add their ids, access them by their ids and delete from html
function deleteEvent() {
    $(".delete").click(function () {
        var _id = $(this).parent().attr("data-item-id");
        
        var deleteObject = {
            type: "DELETE",
            url: "http://api.vschool.io/terry/todo"
        }
        $(".this").remove();
    })
}
