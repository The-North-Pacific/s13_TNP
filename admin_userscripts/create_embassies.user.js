// ==UserScript==
// @name       Eluvataran Embassy Creation Script
// @namespace  http://forum.thenorthpacific.org/
// @version    0.1
// @description  embassy creation script
// @match      http://1811521.a11.zetaboards.com/admin/?menu=forum&c=1
// @require        http://code.jquery.com/jquery-1.6.1.min.js
// @grant          GM_getValue
// @grant          GM_setValue
// @copyright  2013+, You
// ==/UserScript==

var regions=[
  {
    name: "the South Pacific",
    style: "the Coalition of The South Pacific",
    offsite: "http://forums.thesouthpacific.org/"
  },
  {
    name: "Osiris",
    style: "the Kemetic Republic of Osiris",
    offsite: "http://s13.zetaboards.com/Osiris_NS/index/"
  },
  {
    name: "the Pacific",
    style: 'the New Pacific Order of <i>The</i> Pacific',
    offsite: 'http://ns.npowned.net/forum/'
  },
  {
    name: "The East Pacific",
    style: "the Confederation of The East Pacific",
    offsite: 'http://theeastpacific.com/'
  },
  {
    name: "the West Pacific",
    style: "the Republic of the West Pacific",
    offsite: 'http://twp.nosync.org/'
  },
  {
    name: "the Rejected Realms",
    style: "The Rejected Realms",
    offsite: 'http://s8.zetaboards.com/The_RR_and_RRA/'
  },
  {
    name: "Lazarus",
    style: "the Emerald Kingdom of Lazarus",
    offsite: 'http://w11.zetaboards.com/ns_lazarus/'
  },
  {
    name: "Balder",
    style: "the Second Republic of Balder",
    offsite: 'http://w11.zetaboards.com/Balder/'
  },
  {
    name: "Equilism",
    style: "the Equilism Commonwealth of Nations",
    offsite: 'http://www.equilism.org/forum/?act=idx'
  },
  {
    name: "International Democratic Union",
    style: "The International Democratic Union",
    offsite: 'http://s10.zetaboards.com/IDU/'
  },
  {
    name: "Taijitu",
    style: "the Free Region of Taijitu",
    offsite: "http://www.taijitu.org/"
  },
  {
    name: "Stargate",
    style: "the Region of Stargate",
    offsite: "http://90735628.tumblr.com/"
  },
  {
    name: "Lone Wolves United",
    style: "Lone Wolves United",
    offsite: 'http://s1.zetaboards.com/Invader_Haven'
  },
  {
    name: "10000 Islands",
    style: "XKI",
    offsite: 'http://10000islands.proboards.com/'
  },
  {
    name: "The United Defenders League",
    style: "The United Defenders League",
    offsite: 'http://s4.zetaboards.com/UDL/'
  },
  {
    name: "Nysa",
    style: "the Nysan Organization",
    offsite: 'http://w11.zetaboards.com/Nysa/'
  },
  {
    name: "The Commonwealth of Crowns",
    style: "The Commonwealth of Crowns",
    offsite: 'http://w11.zetaboards.com/CommonwealthOfCrowns/'
  },
  {
    name: "Westphalia",
    style: "the Westphalian Empire",
    offsite: 'http://w11.zetaboards.com/NSWestphalia/'
  },
  {
    name: "British Isles",
    style: "the Kingdom of British Isles",
    offsite: 'http://w11.zetaboards.com/British_Isles'
  },
  {
    name: "Mordor",
    style: "the Black Land of Mordor",
    offsite: 'http://w11.zetaboards.com/MordorNS/'
  },
  {
    name: "Spiritus",
    style: "The Elemental Realm of Spiritus",
    offsite: 'http://w11.zetaboards.com/Spiritus/'
  }
];

var pid=3227844;
var fullg=[];
var postg=[8849,8850,8852,8853,8854,8855,1558941];
var viewg=[8848];

for( i in regions ) {
	var o=regions[i];
    console.log("i="+i+", o="+JSON.stringify(o));
    if( GM_getValue(o.name) != 'done' ){
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
		GM_setValue(o.name,'done');
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
