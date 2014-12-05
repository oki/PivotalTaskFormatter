jQuery(function (){
  console.log('Rock & load!')

  $(document.body).on('click', function (e) {
    var target = e.target;
    if ( $(target).hasClass('expander') ) {
      appendButton( $(target).parents('.story.item').data('id') );
    }
  });

  var appendButton = function (target) {
    var $stories, storyID, storyName, storyFormat;

    $stories = $('.story.item');

    if (target) {
      $stories = $('.story_' + target).last();
    }

    $.each($stories, function () {
      $story      = $(this);
      storyID     = target || $story.attr('class').match(/\d+/);
      storyName   = $story.find('.story_name').text() || $story.find('textarea.name').text();
      storyFormat = '[PT ' + storyID + '] ' + storyName;

      $story
        .find('.actions')
        .prepend('<button class="harvest autosaves clipboard_button" data-clipboard-text="'+storyFormat+'"></button>');
    });


  };

  $(document.body).on('click', '.expander', appendButton)

  setTimeout(appendButton, 1000);
});
