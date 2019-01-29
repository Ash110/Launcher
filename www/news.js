$(document).ready(function(){
    $(function() {
        $.ajax({
            type: "get",
            url: "https://timesofindia.indiatimes.com/rssfeeds/-2128833038.cms" ,
            crossDomain: true,
            dataType: "xml",
            success: function(data) {
                console.log(data);
                var $xml = $(data);
                $xml.find("item").each(function() {
                    var $this = $(this),
                        item = {
                            title: $this.find("title").text(),
                            link: $this.find("link").text(),
                            description: $this.find("description").text(),
                            pubDate: $this.find("published").text(),
                            author: $this.find("author").text()
                        };
                    console.log(item);
                    $(".main-news").append('<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator"></div><div class="card-content "><span class="card-title activator grey-text text-darken-4" style="font-size:300%; line-height:110%;">'+item.title+'</span><p><a href="'+item.link+'">Click to view whole article</a></p></div>');
                });
            },
            error: function(xhr, status) {
                console.log(status);
            }
        });
    });
});