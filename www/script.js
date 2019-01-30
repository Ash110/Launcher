function addcontact(){
    $(".add-contact").remove();
    $('.modal').modal('open');
    $(".add-cntct-btn").click(function(){
        var user_name = document.getElementById("user_name").value;
        var user_num = document.getElementById("user_num").value;
        $(".quick-contacts").append("<div class='contacts' number='"+user_num+"'><img src='https://static.thenounproject.com/png/630729-200.png'><p>"+user_name+"</p></div>");
        $(".quick-contacts").append("<div class='contacts add-contact' onclick='addcontact()'><img src='https://image.flaticon.com/icons/svg/78/78294.svg'><p>Create New</p>s </div>");
    });
}
$(document).ready(function() {
    $('.modal').modal();
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
    },30000);
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
    firebase.database().ref('Quick-Note').once('value').then(function(snapshot) {
        var note = (snapshot.val());
        console.log(note); 
        $(".quick-notes p").text(note);
    });
    $(".listen-note").click(function(){
        TTS.speak($(".quick-notes p").text()).then(function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });
    });
    $(".news-icons").click(function(){
        window.location.href="news.html";
    });
});