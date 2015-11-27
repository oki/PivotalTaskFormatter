console.log('Rock & load!')

var initButton = function () {
  var $stories, storyID, storyName, storyFormat;

  if ( $(this).hasClass('expander') ) {
    storyID = $(this).parents('.story.item.model').data('id');
  }

  setTimeout(function () {
    if (storyID) {
      $stories = $('.story_' + storyID).last();
    } else {
      $stories = $('.story.item');
    }

    $.each($stories, function () {
      $story      = $(this);
      storyID     = $story.attr('class').match(/\d+/);
      storyName   = $story.find('.story_name').text() || $story.find('textarea.name').text();
      storyFormat = '[PT ' + storyID + '] ' + storyName;

      $button = $('<button />', {
          class: "harvest autosaves left_endcap clipboard_button",
          title: "Copy formatted story to clipboard",
          'data-clipboard-text': storyFormat
      }).on('click', function (e) {
        e.preventDefault();
      });

      $wrap = $story.find('.wrapper').find('.controls').find('.actions');

      $wrap.prepend( $button );
      $wrap.find('button.link.left_endcap').toggleClass('left_endcap capped')
      $wrap.css({ 'width' : '315px' });
    });
  }, 100)

};

$(document.body).on('click.ptf', '.expander', initButton);

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var list = document.querySelector('div');

var observer = new MutationObserver(function(mutations) {
  initButton()
});

observer.observe(list, {
  attributes: true,
  childList: true,
  characterData: true
});
