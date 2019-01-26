$(document).ready(function() {
    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes ;
        $(".time").text(strTime);
    }
    formatAMPM(d);
    setInterval(function(){
        formatAMPM(d);
    },30000)
    var week = {1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",0:"Sunday"};
    $(".day").text(week[d.getDay()]);
    var months = {0:"January", 1:"February", 2:"March", 3:"April", 4:"May", 5:"June",
                      6:"July", 7:"August", 8:"September", 9:"October", 10:"November", 11:"December" };
    $(".date").text(d.getDate()+" "+months[d.getMonth()]);
    $(".contacts").click(function(){
        var num = $(this).attr("number");
        function onSuccess(result){
            console.log("Success:"+result);
        }
        function onError(result) {
            alert("Error:"+result);
        }
        window.plugins.CallNumber.callNumber(onSuccess, onError, num, true);
    });
});
