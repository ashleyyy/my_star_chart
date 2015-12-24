// ===========================================================
//
//    Global function
//
//    reloadTasks() is called in _taskcreatemodal.ejs when Submit button clicked
//    reloadTasks() is called in user.html.ejs when delete checkbox is clicked
//
// ============================================================

function reloadTasks(userId) {

  $(".tasks").empty();

  $.get('users/' + userId + '/tasks', function(tasks){

    // find the <ul>
    var $taskUl = $('ul.tasks');

    var $taskLi;

    // iterate thru returned array and load <li>s
    tasks.forEach(function(task) {

      $taskLi = $('<li>');

     // <a href data-toggle="modal" data-target="#myModal">Do laundry</a>

      $taskAnchor = $('<a>').text(task.description)
                           .attr({
                                  'id':   task.id.toString(),
                                  'href': '',
                                  'data-toggle': "modal",
                                  'data-target': "#myModal"
                                });

      $taskLi.append($taskAnchor);

      $taskUl.append($taskLi);
    });

  });
}



$(function() {

  console.log("in applications.js file");
  console.log(window.location.pathname);

  var str = window.location.pathname;

  var usersPage = str.match(/^\/view$/);

  var homePage = str.match(/^\/$/);


  if (usersPage || homePage) {


        // ===========================================================
        //
        //
        //   Load user's task list when page opens
        //
        // ============================================================

        var userId = $('div#userId').attr('data-id');
        console.log('inside application.js  line 70');
        console.log("$('div#userId').attr('data-id')");
        console.log(userId);

        var allTasks;

        $.get('users/' + userId + '/tasks', function(tasks){

          // find the <ul>
          var $taskUl = $('ul.tasks');

          var $taskLi;

          allTasks = tasks;

          // iterate thru returned array and load <li>s
          tasks.forEach(function(task) {

             $taskLi = $('<li>');

             // <a href data-toggle="modal" data-target="#myModal">Do laundry</a>

             $taskAnchor = $('<a>').text(task.description)
                                   .attr({
                                          'id':   task.id.toString(),
                                          'href': '',
                                          'data-toggle': "modal",
                                          'data-target': "#myModal"
                                        });

             $taskLi.append($taskAnchor);

             $taskUl.append($taskLi);
          });


        });


        // ===========================================================
        //
        //
        //   Trap task list item click and open modal Bootstrap "task detail" window
        //
        // ============================================================
        // Attach a delegated event handler
        $('ul.tasks').on('click', 'a', function(event) {

          // load user's task data into modal

          event.preventDefault();

          $('div.details').text( $( this ).text() ).attr({
                                                        'id':   $(this).attr("id")
                                                        });
        });


   } // end of user's Page  !!!

});