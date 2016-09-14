// ==UserScript==
// @name       Eluvataran ACP CSS Override Script
// @namespace  http://forum.thenorthpacific.org/admin/
// @version    0.1
// @description  ACP skin override
// @match      http://2142228.13.zetaboards.com/admin/*
// @require        http://code.jquery.com/jquery-1.6.1.min.js
// @copyright  2013+, You
// ==/UserScript==

// myHereDoc based on https://stackoverflow.com/a/14416259

function myHereDoc() {
/*HERE
html, body {
  margin: 0;
  padding: 0;
	
	min-height: 100%;
	height: auto !important;
	height: 100%;
	
  font-family: "Helvetica", "Arial", "Bitstream Vera Sans", "Verdana", sans-serif;
  font-size: 93.3%;
  background: #5a70b3;
}

a:link,
a:active,
a:visited {
  color: #E77700;
  text-decoration: none;
}
a:hover {
  color: #fb8a00;
  text-decoration: none;
}

a.member {
color:#333;
}
a.member:hover {
color:#555;
}


a img { vertical-align: bottom; border: 0; }
form { padding: 0; margin: 0; display: inline; }
label { }
table {
border-spacing: 0;
border-collapse: collapse;
empty-cells:show;
margin-bottom: 15px;
width:100%;
}
td,th {
font-size:90%;
}
td {
padding:5px 10px;
}
table {
background:#f0f0f0;
}
th,td {
border:1px solid #e5e5e5;
}
th {
background:url(http://z3.ifrm.com/static/1/sub.png) repeat-x top #fafafa;
color:#777;
font-weight:400;
}
td {
background:#fafafa;
color:#333;
}
th a, th a:hover {
color:#777;
font-weight:700;
}

textarea { width: 98%; margin: auto; font-family: Verdana, sans-serif; font-size: 12px; }
textarea.s { width:auto; }
ul, ol, li, dl, dd, dt { list-style: none; padding: 0; margin: 0; }
li { display: inline; }
ul.list li { display: list-item; list-style-type:square; margin-left:15px; padding-left:5px; }

.clear { clear: both; }
.left { float: left; }
.right { float: right; }
.l { text-align: left; }
.c { text-align: center; }
.r { text-align: right; }
  
h1, h2, h3, h4, h5 { margin: 0; padding: 0; text-align: left; }
h2, thead th {
  padding: 5px;
  background: url(http://z3.ifrm.com/static/1/css/h2.png) #7082B8 top repeat-x;
  border: 1px solid #5a70b3;
  font-size: 110%; 
  font-weight: bold;
  text-align: left;
  color: white; 
}
  h2 a:link, thead th a:link,
  h2 a:hover, thead th a:hover,
  h2 a:active, thead th a:active,
  h2 a:visited, thead th a:visited {
    color: white;
  }
h3 { color: #5a70b3; }

tr.generic td, div.generic { padding: 20px; font-size: 120%; font-weight: bold; text-align: center; }

input, select, textarea {
  vertical-align: middle;
  background: #F9F9F9;
  color: #888;
  border: 1px solid #BFC8E3;
}
select {
  color: #000;
}

  input:focus, input.focus, textarea:focus, textarea.focus {
    color: #333;
    background: #FCFCFC;
  }

input {
  padding: 3px 5px;
  font-size: 85%;
}
  input.no {
  padding: 0;
  background: none;
  border: none;
  }

select { font-size: 90%; }
  option { margin: 2px 0; }

button {
  padding: 3px 5px;
  vertical-align: middle;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 85%;
  color: #666;
  background: url(http://z3.ifrm.com/static/1/css/btn.png) repeat-x #F9F9F9;
  border: 1px solid #BFC8E3;
}
  button:hover {
    border-color: #9FA8C3;
  }

#topmenu {
	width: 100%;
	background: url(http://z3.ifrm.com/static/acp/topmenu.png) repeat-x;
	overflow:hidden;
}	
	#topmenu a, #topmenu a:hover {
		color: white;
	}

	#topmenu span {
		display: block;
		float:right;
		text-align: center;
		height: 75px;
		font-size: 90%;
	    padding:10px 15px 0px 6px;
	}
	* html #topmenu span {
		width:90px;
	}

	#topmenu li.acplink { height: 85px; }
	#topmenu li.acplink a { float: left; height: 100%; }
	#topmenu li.acplink img { opacity: 1; -moz-opacity: 1; }
	#topmenu li.acplink span { float:none; padding:0; }
	
	#topmenu img {
		padding: 0;
		-moz-opacity: 0.9;
		opacity: 0.9;
	}
	#topmenu a:hover img {
		-moz-opacity: 1;
		opacity: 1;
	}

	#submenu {
		padding: 25px 10px 8px;
		font-size: 83.3%;
		background: url(http://z3.ifrm.com/static/acp/submenu_brandon.png) repeat-x;
		color: white;
	}

#wrap {
  clear: both;
  margin: 1em;
  background:#5a70b3 !important;
}


#sidemenu {
	display:inline;
	float:left;
	width:140px;
	padding:15px;
	
	background:#fff;
	margin-right:10px;
}

	#sidemenu dl {
		font-weight:700;
		font-size:85%;
		margin-bottom:10px;
		padding:0;
		border-bottom: 2px solid #5a70b3;
	}
		#mnu_board { background: #f0f0fa url(http://z3.ifrm.com/static/acp/bg_settings.png) bottom right no-repeat}
		#mnu_users { background: #f0f0fa url(http://z3.ifrm.com/static/acp/bg_users.png) bottom right no-repeat}
		#mnu_forums { background: #f0f0fa url(http://z3.ifrm.com/static/acp/bg_forums.png) bottom right no-repeat}
		#mnu_themes { background: #f0f0fa url(http://z3.ifrm.com/static/acp/bg_themes.png) bottom right no-repeat}
		#mnu_history { background: #f0f0fa url(http://z3.ifrm.com/static/acp/bg_history.png) bottom right no-repeat}
		#mnu_amt { background: #f0f0fa url(http://z3.ifrm.com/static/acp/bg_amt.png) bottom right no-repeat}
		#mnu_zb { background: #fce7dd }
	
	#sidemenu dt {
		background:#5a70b3 url(http://z3.ifrm.com/static/acp/mnu_right.png) top right no-repeat;
		color:#fff;
		text-align:center;
		padding:0;
		display:block;

	}
	#sidemenu dt span {
		display:block;
		width:100%;
		height:20px;
		padding-top:7px;
		background: url(http://z3.ifrm.com/static/acp/mnu_left.png) top left no-repeat;
	}
	
	#sidemenu dd {
		font-size:90%;
		border-right: 2px solid #5a70b3;
	}
	
		#sidemenu dd a {
			display:block;
			color: #333;
			font-weight:400;
			padding:3px 0 2px 8px;
			margin: 0;
			border-left:5px solid #5a70b3;
		}
		#sidemenu dd a:hover {
			padding-left:5px;
			border-left:8px solid #ffa82b;
		}
	dl#mnu_zb, #mnu_zb dd, #mnu_zb dd a {
		border-color: #ffa82b;
	}
	#mnu_zb dt {
		background:#ffa82b url(http://z3.ifrm.com/static/acp/smnu_right.png) top right no-repeat;
	}
	#mnu_zb dt span {
		background:url(http://z3.ifrm.com/static/acp/smnu_left.png) top left no-repeat;
	}
	#mnu_zb dd a:hover {
		border-color:#5a70b3;
	}

#main {
	background:#fff;
	margin-left:180px;
	padding:15px;
}
	* html #main {
		margin-left:185px;
	}
	* html table {
		width:98%;
	}

img.help, img.wizard { margin-left: 5px; float: right; }

#footer {
  clear: both;
  font-size: 90%;
  color: white;
  background-color: #5a70b3;
  padding-top: 20px;
  text-align: center;
}
  #footer a { font-weight: bold; }

ul.largelinks { clear: both; }
ul.largelinks li { display: inline; }
ul.largelinks a {
	display: block;
	float: left;
	overflow: auto;
	width: 175px;
	height: 125px;
	margin: 0.5em;
	padding: 0.5em 1em;
	font-size: 85%;
	text-align: justify;
	background-color: #fcfcfc;
	color: #333;
	border: 3px solid #5a70b3;
}
ul.largelinks img { display: block; margin: auto; }
ul.largelinks strong { display: block; margin: 3px 0; font-size: 125%; text-align: center; }

.notice, .alert { padding: 5px 24px 5px 42px; margin: auto; margin-bottom: 1em; }
.notice {
  border: 1px solid #99d;
  background: #eef;
}
.alert {
  border: 1px solid #d99;
  background: #fee;
}
td.c_desc { width: 30%; font-weight: bold; background: #f6f6f6; }
td.c_desc small, td.c_mark small { display: block; font-weight: normal; }
td.c_opt { width: 125px; text-align: center; background: #f6f6f6; font-size: 90%; }

td.c_mark { width: 1%; background: #f6f6f6; text-align: center; }
  td.c_mark img { margin: auto; }
td.c_forum { width: 60%; font-size: 95%; }
  .c_forum a:link, .c_forum a:active, .c_forum a:visited, .c_forum span { font-size: 110%; font-weight: bold; text-decoration: none; color: #425384; }
  .c_forum a:hover, a.c_forum-queued:hover, a.c_forum-reported:hover, td.c_last strong a:hover { color: #5A70B3; }
  .c_forum-desc { font-size: 85%; color: #333; }

tr.postbtn td { text-align: center; padding: 5px; }
.row1 td { background: #fcfcfc; }
.row2 td { background: #f6f6f6; }

#nav {
margin:0 -1px 5px -1px;
height:1%;
padding:6px 1%;
background:#f6f6f6;
border:1px solid #e5e5e5;
}

#nav {
color:#5a70b3;
}

#nav li span {
font-weight:700;
}

.ms_av { width: 1%; background: #f6f6f6; }
.ms_name { font-size: 120%; font-weight: 700; }
	.ms_name div { display: block; font-size: 70%; font-weight: 400; }
.ms_posts { text-align: center; font-size: 120%; }
.ms_warn { text-align: center; }
.ms_opts { text-align: center; }
	.ms_opts img { vertical-align: middle; }


.cat-pages, .topic-pages {
  width: 50%;
  margin: 15px 0;
	padding: 5px 0px;
  font-size: 90%;
  color: #536AAD;
}

  .cat-pages a:link, .cat-pages a:active, .cat-pages a:visited,
	.cat-topicpages a:link, .cat-topicpages a:active, .cat-topicpages a:visited,
	.topic-pages a:link, .topic-pages a:active, .topic-pages a:visited {
    color: #5a70b3;
    background: #fff;
  }
    .cat-pages a:hover, .cat-topicpages a:hover, .topic-pages a:hover {
      background-color: #EFF2F8;
    }
  .cat-pages a, .cat-pagesjump i, .topic-pages a, .cat-topicpages a {
    padding: 2px 5px;
    border: 1px solid #BEC8E3;
  }
  .cat-topicpages a {
    padding: 0px 2px;
  }
  .cat-topicpages {
    float: right;
    font-size: 80%;
  }

  .cat-pages span, .topic-pages span {
    padding: 2px 5px;
    font-weight: bold;
    color: white;
    background-color: #F79720;
    border: 1px solid #D76700;
    cursor: default;
  }
	
	.cat-pagesjump { cursor: pointer; }
	
	.cat-pages input, .topic-pages input {
		background-color: inherit;
		color: inherit;
		padding: 3px 5px;
		vertical-align: baseline;
	}
  
  .cat-buttons, .topic-buttons {
    width: 50%;
    float: right;
    margin: 15px 0;
    text-align: right;
  }
.amt_list dt { font-weight: bold; }
.amt_list dd {
    margin-left: 2em;
    border-left: 5px solid #e7e7e7;
    padding-left: 5px;
}

#help td { vertical-align: top; }

.slide {
	height:23px;
	position:relative;
	background: url(http://z3.ifrm.com/static/acp/slide_l.png) left no-repeat;
	float:left;
}
.slide_thumb {
	width: 18px;
	height:23px;
	font-size:1px;
	position:absolute;
	position:relative;
	background: url(http://z3.ifrm.com/static/acp/slide_thumb.png) no-repeat;
}
.slide_input {
	float:left;
}

.rdb_type {
	font-size:125%;
	width:1%;
}

#rdb_l {
float:left;
width:150px;
}

#rdb_r {
float:right;
width:150px;
}

#rdb_clear {
background:transparent;
border:none;
clear:both;
font-size:1px;
height:1px;
margin:0;
padding:0;
}

tr.rdb_enabled td {
	background:#f3f3ff;
}

.treeview, .treeview ul { 
	padding: 0;
	margin: 0;
	list-style: none;
}

.treeview li { 
	margin: 0;
	padding: 3px 0pt 3px 16px;
	display: block;
}

blockquote {
background:#f6f6f6;
border:1px solid #3a5197;
margin:10px auto;
padding-bottom:1px;
width:98%;
}

blockquote dl {
background:url(http://z3.ifrm.com/static/1/quote.png) repeat-x top #6677AF;
border-bottom:1px solid #3a5197;
color:#fff;
}

blockquote dl dt {
color:#fff;
float:left;
font-weight:700;
}

code {
background:#f6f6f6;
display:block;
font-family:Monaco, Consolas, "Courier New", Courier, monospace;
max-height:400px;
overflow:auto;
white-space:pre;
}

div.spoiler {
border:1px solid #5a70b3;
border-top:0;
padding:5px 7px;
}

div.spoiler_toggle {
background:url(http://z3.ifrm.com/static/1/quote.png) repeat-x top #6677AF;
border:1px solid #3a5197;
color:#fff;
cursor:pointer;
font-weight:700;
padding:2px 4px;
}

blockquote dl dt,blockquote dl dd {
padding:2px 4px;
}

blockquote div,blockquote code {
margin:0;
padding:5px;
}


blockquote div {
background:#f6f6f6;
}

hr {
background-color:#5a70b3;
border:0;
color:#5a70b3;
height:1px;
}
HERE*/
    var here = "HERE";
    var reobj = new RegExp("/\\*"+here+"\\n[\\s\\S]*?\\n"+here+"\\*/", "m");
    str = reobj.exec(myHereDoc).toString();
    str = str.replace(new RegExp("/\\*"+here+"\\n",'m'),'').toString();
    return str.replace(new RegExp("\\n"+here+"\\*/",'m'),'').toString();
}

var acp_css = myHereDoc();

head = document.getElementsByTagName('head')[0];
if (head) {
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = acp_css;
    head.appendChild(style);
}
