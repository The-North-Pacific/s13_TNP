/* 
Advanced Multi PM System by Viral of http://vr.zetabin.com and http://zbaio.zetabin.com
Modified by r3naissanc3r, Europeia forums 2013
*/
if(location.href.match(/msg\/\?c=[2|3]/)){
	var pm = {
		state : 1, // 1 = single, 2 = multi,
		errors : 0,
		add : [],
		list : [],
		single : function(){ 
			this.state = 1; 
			$(".single").show(); 
			$(".multi").hide(); 
		},
		multi : function(){ 
			this.state = 2; 
			$(".multi").show(); 
			$(".single").hide(); 
		},
		checkAdd : function(){
			pm.add = [];
			pm.errors = 0;
			var users = $("#add").val().split("\n");
			var l = $.trim($("#add").val());
			$("#addFault").html('<strong>The users listed below do not exist:</strong>');
			if(l.length > 0){
				pm.checkExists(users);
			} else {
				pm.checkNext([]);
			}
		},
		checkExists : function(users){
			var user = $.trim(users[0]);
			if(user.length == 0) {
				pm.checkNext(users);
			} else {
				xmlhttp=new XMLHttpRequest();
				xmlhttp.open("GET",main_url+"members/?search_type=start&name="+user+"&group=0&sort=name&order=a",false);
				xmlhttp.send();

				myStr = new String(xmlhttp.responseText);
				x = myStr.indexOf('<table cellspacing="0" id="member_list_full">'); myStr = new String(myStr.substr(x));
				y = myStr.indexOf("</table>"); myStr = new String(myStr.substr(0,y+8));

				exist = myStr.indexOf("No members") > 0 ? 0 : 1;
				if (exist == 1) {
					a = new String(myStr.substr(myStr.indexOf(user), user.length));
					b = new String(myStr.substr(myStr.indexOf("profile/")+8));
					b = new String(b.substr(0,b.indexOf("class='member'")-3));
					if($.trim(a.toString().toLowerCase()) == $.trim(user.toLowerCase())) {
						pm.add[pm.add.length] = [a, parseInt(b)];
						exist = 1;
					} else {
						exist = 0;
					}
				}
				if(exist == 0){
					$("#addFault").append('<br />'+user);
					pm.errors++;
				}
				pm.checkNext(users);
			}
		},
		checkNext : function(users){
			if(users.length > 1){
				users.reverse();users.pop();users.reverse();
				pm.checkExists(users);
			} else if(pm.errors > 0) {
				alert("At least one of the users in the mailing list does not exist.\nThe PM has not been sent.");
				$("button[accesskey=s]").attr("disabled",false);
			} else if((pm.add.length == 0) && $("select[name=groups] option:first").attr("selected")===true) {
				alert("The mailing list is empty.\nThe PM has not been sent.");
				$("button[accesskey=s]").attr("disabled",false);
			} else {
				pm.addToList();
			}
		},
		addToList : function(){
			var l = pm.add.length;
			pm.add.reverse();
			while(l--){
				var id = pm.add[l][1];
				var uL = pm.list.length;
				var there = 0;
				while(uL--){
					if(pm.list[uL][1] == id){
						there = 1;
					}
				}
				if(there == 0){
					pm.list[pm.list.length] = pm.add[l];
				}
			}
			if(pm.list.length > 0){
				pm.startSending();
			} else {
				alert("The mailing list is empty.\nThe PM has not been sent.");
				$("button[accesskey=s]").attr("disabled",false);
			}
		},
		startSending : function() {
			alert("Your browser may temporarily freeze to prevent interrupting the PM process.\nYou will get another alert when the PMs have all been sent.\nThis process may take up to a few minutes depending on the size of the mailing list.");
			$.get(main_url+"msg/?c=2",function(f){
				var secure = $("input[name=secure]",f).val();
				var xc = $("input[name=xc]",f).val();
				pm.snail(secure,xc);
			});
		},
		snail : function(secure,xc){
			var id = pm.list[0][1];
			var title = $("input[name=title]").val();
			var content = $("#c_post-text").val();
			$.post(main_url+"msg/?c=3&sd=1",{convo:0,draft_edit:0,fwd:0,mid:id,post:content,secure:secure,submit:"",title:title,xc:xc},function() {
				$("form[action*='c=20&send=1']").submit();
				if(pm.list.length > 1) {
					pm.list.reverse();pm.list.pop();pm.list.reverse();
					pm.snail(secure,xc);
				} else {
					alert("PM sent successfully.");
					location.reload();
				}
			});
		}
	}
	$.get($("#top_info a:first").attr("href"),function(d){
		var allowed = true;
		$("#pm_compose td.c_desc").next().attr("colspan",2);
		$("#emot_wrap").parent().next().attr("colspan",2);
		$("#pm_compose thead tr th,#c_post,#pm_compose tbody tr:last td,#pm_compose th[colspan=2]").attr("colspan",3)
		$("#pm_compose td.c_desc:first").text("Username").parent().addClass("single").after('<tr class="multi" style="display:none;"><td class="c_desc">Add Users<br /><small><em>Add extra users to the mailing list<br />Each user should be added on a new line</em></small></td><td><textarea id="add" rows="3" cols="4"></textarea></td><td id="addFault"></td></tr></div>').before('<tr><td class="c_desc">Send To</td><td colspan="2"><button name="single" type="button" onclick="pm.single();">Single User</button> <button name="multiple" type="button" onclick="pm.multi();">Multiple Users</button></td></tr>');
		$("form[name=posting]").submit(function(e){
			pm.state == 2 ? (e.preventDefault ? e.preventDefault() : e.returnValue = false) : true;
			if(pm.state == 2){
				$("button[accesskey=s]").attr("disabled",true);
				if($("input[name=title]").val().length<=0||$("#c_post-text").val().length<=0){
					alert("You must input a title and PM content.\nThe PM has not been sent.");
					$("button[accesskey=s]").attr("disabled",false);
				} else if(($("#add").val().length == 0) && $("select[name=groups] option:first").attr("selected")===true){
					alert("The mailing list is empty.\nThe PM has not been sent.");
					$("button[accesskey=s]").attr("disabled",false);
				} else {
					pm.checkAdd();
				}
			}
		});
	});
}
