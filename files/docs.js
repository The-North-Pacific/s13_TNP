
function documents_scale() {
    rem = $(window).height()-150-$("#documents>div").first().height()-$("#documents>table>thead").height();
    $("#documents tbody").height(rem);
}
function toc_callback() {
    this.style.display = "table-row";
    documents_scale();
}
documents_scale();

function document_clicked(doc) {
    $(doc.link).addClass("current")
    toc = doc.toc;
    if( ! doc.fetched ) {
        $(doc.id).load(doc.url, function() {
            if( toc ) {
                tocs = $(toc.selector);
                toc_count = tocs.size();
                tocs.wrap("<a class=\"article\"/>");
                toc_ol_first = $(toc.id+" ol");
                if( toc_count > 8 ) {
                   $(toc.id).append("<td><ol start=\""+Math.floor(toc_count/2+2)+"\"></ol></td>");
                   toc_ol_last = $(toc.id+" ol").last();
                   toc_ol = function(index){
                       if( index > toc_count/2 ) {
                           return toc_ol_last;
                       } else {
                           return toc_ol_first;
                       }
                   };
                } else {
                    toc_ol = function(){ return toc_ol_first };
                }
                $(doc.id+" a.article").each(function(index,value){
                    value.setAttribute("name",doc.id+"_"+index);
                    toc_ol(index).append("<li><a href=\"#"+doc.id+"_"+index+"\">"+value.text+"</a></li>");
                } );
            }
            documents_scale();
        } );
        doc.fetched = true;
    }
    if( docs.cur != doc ) {
       $("#documents").slideDown();
       if( docs.cur != null ) {
           $(docs.cur.id).slideUp(documents_scale);
           $(docs.cur.link).removeClass("current");
           if(docs.cur.toc){$(docs.cur.toc.id).slideUp(documents_scale);}
       }
       $(doc.id).slideDown(documents_scale);
       if(toc){ 
           $(toc.id).slideDown(toc_callback);
       }
       docs.cur = doc;
    } else {
       if(toc){$(toc.id).slideUp();}
       $(doc.id).slideUp();
       $("#documents").slideUp();
    }
    return false;
}
function document_hide() {
    $(docs.cur.id).slideUp();
    if(docs.cur.toc){$(docs.cur.toc.id).slideUp();}
    docs.cur = null;
    $("#documents").slideUp();
}