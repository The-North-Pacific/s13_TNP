// ==UserScript==
// @name       Eluvataran Embassy Creation Script
// @namespace  http://forum.thenorthpacific.org/
// @version    0.1
// @description  embassy creation script
// @match      http://2142228.13.zetaboards.com/admin/?menu=forum&c=1
// @require        http://code.jquery.com/jquery-1.6.1.min.js
// @grant          GM_getValue
// @grant          GM_setValue
// @copyright  2013+, You
// ==/UserScript==

var regions=[
  {
    name: "Europeia",
    style: "the Republic of Europeia",
    offsite: "http://z6.invisionfree.com/Europeia/"
  },
  {
    name: "Region Inc",
    style: "the Company of Region Inc",
    offsite: "http://regioninc.com/"
  },
  {
    name: "United Kingdom",
    style: 'the United Kingdom region',
    offsite: 'http://s4.zetaboards.com/United_Kingdom_NS/index/'
  },
  {
    name: "Unknown",
    style: "the Unknown Empire of Incognita",
    offsite: 'http://s9.zetaboards.com/unknownregion/'
  },
  {
    name: "the FRA",
    style: "the Founderless Regions Alliance",
    offsite: 'http://s7.zetaboards.com/FRA/'
  },
  {
    name: "Kantrias",
    style: "the Kingdom of Kantrias",
    offsite: 'http://z13.invisionfree.com/Kantrias/'
  },
  {
    name: "Normandy",
    style: "the Duchy of Normandy",
    offsite: 'http://w11.zetaboards.com/Duchy_of_Normandy/'
  }
];

var pid=39650;
var fullg=[12376,12378,12381,12388];
var postg=[12375];
var viewg=[12374,12377];

for( i in regions ) {
	var o=regions[i];
    console.log("i="+i+", o="+JSON.stringify(o));
    if( GM_getValue(o.name) == undefined || GM_getValue(o.name) != 'really_done' ){
        console.log(o.name+"!");
		$('form[name=forum_form]').attr('target','forum_'+i);
        var reg=o.name;
        var style=o.style;
        var desc='<a href="'+o.offsite+'">\
<img src="http://udl.taijitu.org/images/rflags/\
' + reg.toLowerCase().replace(/ /g,'_') + '/flag" alt="Flag of \
' + reg + '" title="Flag of ' + reg + '" class="rflag" /></a>The Embassy of \
'+style;
    	$('[name="pid"]').val(pid);
		$.each(viewg, function(j,q){
			$('[name="view'+q+'"]').attr('checked',true);
			$('[name="read'+q+'"]').attr('checked',true);
		});
		$.each(postg, function(j,q){
			$('[name="view'+q+'"]').attr('checked',true);
			$('[name="read'+q+'"]').attr('checked',true);
			$('[name="reply'+q+'"]').attr('checked',true);
			$('[name="start'+q+'"]').attr('checked',true);
		});
		$.each(fullg, function(j,q){
			$('[name="view'+q+'"]').attr('checked',true);
			$('[name="read'+q+'"]').attr('checked',true);
			$('[name="reply'+q+'"]').attr('checked',true);
			$('[name="start'+q+'"]').attr('checked',true);
			$('[name="upload'+q+'"]').attr('checked',true);
		});
		$('[name="polling"]').val(0);
        $('input[name="forum_title"]').val(reg);
        $('textarea[name="forum_desc"]').text(desc);
        $('form[name=forum_form]').submit();
		GM_setValue(o.name,'really_done');
        break;
	}
}
console.log("yay!");
if( $('input[name="forum_title"]').val() != "" ) {
	setTimeout(function(){
		console.log("yayay!");
		window.location.reload(true);
	},300);
}
