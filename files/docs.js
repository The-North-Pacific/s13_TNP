function toc_callback() {
    this.style.display = "table-row";
}
docs = { cur: null,
constitution: { id: "#constitution", link: "#link_const", fetched: false, url: "http://forum.thenorthpacific.org/topic/633857/1/ .c_post", toc:{ id: "#toc_const", selector: "#constitution>td>*+strong"} },
BoR: { id: "#BoR", link: "#link_bor", fetched: false, url: "http://forum.thenorthpacific.org/topic/633856/1/ .c_post", toc: null },
laws: { id: "#laws", link: "#link_laws", fetched: false, url: "http://forum.thenorthpacific.org/single/?p=205153&t=633858 .c_post", toc: {id: "#toc_laws", selector: "#laws>td>strong>span"} },
courtRules: { id: "#cr", link: "#link_cr", fetched: false, url: "http://forum.thenorthpacific.org/single/?p=8015997&t=6738296 .c_post", toc: null },
cops: { id: "#cops", link: "#link_cops", fetched: false, url: "http://forum.thenorthpacific.org/single/?p=209115&t=633858 .c_post", toc: null },
abst: { id: "#abst", link: "#link_abst", fetched: false, url: "http://forum.thenorthpacific.org/single/?p=226599&t=635106 .c_post", toc: null },
spt: { id: "#spt", link: "#link_spt", fetched: false, url: "http://forum.thenorthpacific.org/single/?p=8015562&t=635106 .c_post", toc: null },
oos: { id: "#oos", link: "#link_oos", fetched: false, url: "http://forum.thenorthpacific.org/single/?p=8046494&t=635106 .c_post", toc: null },
rnr: { id: "#rnr", link: "#link_rnr", fetched: false, url: "http://forum.thenorthpacific.org/single/?p=8046495&t=635106 .c_post", toc: null }}

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
                    toc_ol(index).append("<li><a href=\"#"+doc.id+"_"+index+"\">"+value.text()+"</a></li>");
                } );
            }
        } );
        doc.fetched = true;
    }
    if( docs.cur != doc ) {
       $("#documents").slideDown();
       if( docs.cur != null ) {
           $(docs.cur.id).slideUp(documents_scale);
           $(docs.cur.link).removeClass("current");
           if(docs.cur.toc){$(docs.cur.toc.id).slideUp();}
       }
       $(doc.id).slideDown();
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
