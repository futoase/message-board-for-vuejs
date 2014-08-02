$(function() {
  var apiUrl = 'http://localhost:3000/posts';

  var message = new Vue({
    el: "#post",

    methods: {
      sendPosts: function(e) {
        var self = this;
        $.ajax({
          type: 'POST',
          url: apiUrl,
          dataType: 'json',
          data: {
            name: $("#name").val(),
            message: $("#message").val()
          }
        });
      }
    }
  });

  $.ajax({
    type: 'GET',
    url: apiUrl,
    dataType: 'json',
    success: function(json) {
      message.$data.posts = json;
      console.dir(json);
    },
    data: null
  });
});
