jQuery(function (){
  console.log('Rock & load!')

  $(document.body).on('click', function (e) {
    var target = e.target;
    if ( $(target).hasClass('expander') ) {
      appendButton( $(target).parents('.story.item.model').data('id') );
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

      $button = $('<button />', {
          class: "harvest autosaves left_endcap clipboard_button",
          title: "Copy formatted story to clipboard",
          'data-clipboard-text': storyFormat
      }).on('click', function (e) {
        e.preventDefault();
      });

      $wrap = $story.find('.edit').find('.controls').find('.actions');

      $wrap.prepend( $button );
      $wrap.find('button.link.left_endcap').toggleClass('left_endcap capped')
      $wrap.css({ 'width' : '315px' });
    });

  };

  $(document.body).on('click', '.expander', appendButton)

  setTimeout(appendButton, 1000);
});
