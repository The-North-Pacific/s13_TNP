// ==UserScript==
// @name           Eluvataran Forum Readonly Script
// @namespace      http://forum.thenorthpacific.org/admin/#!forum_readonly
// @version        0.1
// @description    set all boards to readonly
// @include        http://2142228.13.zetaboards.com/admin/?menu=forum
// @require        https://code.jquery.com/jquery-1.6.1.min.js
// @grant          GM.getValue
// @grant          GM.setValue
// ==/UserScript==

console.log("Loading "+GM.info.script.name);

function toggle_button(toggle_fn, toggle_name) {
  console.log("started toggle_button");
  console.log($);
  $('#nav>li:last').after($('<li></li>').text(' → ')
    .append($('<a></a>').click(toggle_fn).text(toggle_name)));
}

const $frame = $('<iframe></iframe>',{
      name: "READONLY",
}).hide();
const $body = $('body');
$body.append($frame);

// 1 = ro, 0 = rw
function set_forum_readonly(url, callback, readonly) {
  $.get(url).done(function(doc) {
    const $form = $(doc).find('form');
    $form.attr('target',"READONLY");
    $form.find('[name=readonly]').val(readonly);

    $form.appendTo($body);
    $form.hide();
    $form.submit()
    $frame.ready(callback);
  });
}

function set_forum_readonly_fn(readonly) {
  return function(url, callback) {
    return set_forum_readonly(url, callback, readonly);
  };
}

function set_state_fn(readonly) {
  GM.setValue("state", readonly);
}

function lock_forum() {
  each_subforum(set_forum_readonly_fn(1),set_state_fn(1));
  return false;
}

function unlock_forum() {
  each_subforum(set_forum_readonly_fn(0),set_state_fn(0));
  return false;
}

function edit_settings_links(doc) {
  return $(doc).find("a:contains('Edit Settings')").map((i,x) => {
    return $(x).attr("href");
  });
}

function forum_links(doc) {
  return $(doc).find("a[href*='menu=forum&f=']").map((i,x) => {
    return $(x).attr("href");
  });
}

function each_subforum(callback, done) {
  console.log("started each_subforum");
  const to_traverse = $.makeArray(forum_links(document));
  console.log(to_traverse);
  const to_lock = $.makeArray(edit_settings_links(document));
  console.log(to_lock);
  const do_callback = function() {
    console.log("toggling...");
    if ( to_lock.length > 0 ) {
      const url = to_lock.shift();
      console.log("Toggling "+url);
      callback(url, do_callback);
    } else {
      console.log("Done!");
      done();
    }
  };
  const traverse = function() {
    console.log("traversing...");
    console.log(to_traverse);
    if ( to_traverse.length > 0 ) {
      const url = to_traverse.shift();
      console.log("Traversing "+url);
      $.get(url).done(function(doc) {
        console.log(url+" done, parsing");
        forum_links(doc).each(function(i, u) {
          to_traverse.push(u);
        });
        edit_settings_links(doc).each(function(i, u) {
          to_lock.push(u);
        });
        console.log(url+" done, parsed");
        traverse();
      }).fail(function(){
        console.log(url+" fail");
      });
    } else {
      console.log(to_lock);
      do_callback();
    }
  };
  console.log("starting traverse");
  traverse();
  console.log("started traverse");
}

function main() {
  console.log("Starting "+GM.info.script.name);
  GM.getValue('state').then((state) => {
    console.log("loaded state:");
    console.log(state);
    let toggle_fn;
    let toggle_name;
    if( state != 1 ) {
      toggle_fn = lock_forum;
      toggle_name = "Lock Forum";
    } else {
      toggle_fn = unlock_forum;
      toggle_name = "Unlock Forum";
    }
    console.log(toggle_name);
    toggle_button(toggle_fn, toggle_name);
    console.log("Started "+GM.info.script.name);
  });
}

main();
