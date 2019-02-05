function addcontact(){
    $(".add-contact").remove();
    $('#modal1').modal('open');
    $(".add-cntct-btn").click(function(){
        var user_name = document.getElementById("user_name").value;
        var user_num = document.getElementById("user_num").value;
        $(".quick-contacts").append("<div class='contacts' number='"+user_num+"'><img src='https://image.flaticon.com/icons/svg/145/145867.svg'><p>"+user_name+"</p></div>");
        $(".quick-contacts").append("<div class='contacts add-contact' onclick='addcontact()'><img src='https://image.flaticon.com/icons/svg/78/78294.svg'><p>Create New</p></div>");
    });
}
    var times = ['01:00 am', '06:00 pm', '12:00 pm', '03:00 am', '12:00 am'];
    times.sort(function (a, b) {
        return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
    });
    console.log(times);
$(document).ready(function() {
    $('.tabs').tabs();
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
        console.log("You have a note from "+note.Sender+" . "+note.Note); 
        $(".quick-notes p").text("You have a note from "+note.Sender+" . "+note.Note);
    });
    $(".listen-note").click(function(){
        TTS.speak($(".quick-notes p").text()).then(function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });
    });
    $(".dialer").click(function(){
        var sApp = startApp.set({
            "application":"com.google.android.contacts"
        });
        sApp.start(function() { /* success */
            console.log("OK");
        }, function(error) { /* fail */
            alert(error);
        });
    });
    $(".whatsapp").click(function(){
        window.open("https://api.whatsapp.com/send?phone=+919845207857&text=Hi there");
    });
    $(".video-call").click(function(){
        var sApp = startApp.set({
            "application":"com.google.android.apps.tachyon"
        });
        sApp.start(function() { /* success */
            console.log("OK");
        }, function(error) { /* fail */
            alert(error);
        });
    });
	var gn = new GyroNorm();
	var args = {
		frequency:50,					// ( How often the object sends the values - milliseconds )
		gravityNormalized:true,			// ( If the gravity related values to be normalized )
		orientationBase:GyroNorm.GAME,		// ( Can be GyroNorm.GAME or GyroNorm.WORLD. gn.GAME returns orientation values with respect to the head direction of the device. gn.WORLD returns the orientation values with respect to the actual north direction of the world. )
		decimalCount:10,					// ( How many digits after the decimal point will there be in the return values )
		logger:null,					// ( Function to be called to log messages from gyronorm.js )
		screenAdjusted:false			// ( If set to true it will return screen adjusted values. )
	};
	gn.init(args).then(function(){
    	gn.start(function(data){
        	var aa = Math.pow((Math.pow(data.dm.gx,2) + Math.pow(data.dm.gy,2)+Math.pow(data.dm.gz,2)),(1/2));
        	if(aa>50){
				$('#modal-fall').modal('open');
				currentAudio = document.createElement('audio');
        		var fileName=String("annoying-alarm-tone.mp3");
        		currentAudio.setAttribute('src', fileName);
        		currentAudio.setAttribute('autoplay', 'autoplay');
        		currentAudio.play();
				var t=5;
				setInterval(function(){
					if(t>0){
						$(".calling-fall").text("Calling Emergency services in "+t);
						t-=1;
					}
				},1000);
				setTimeout(function(){
        			function onSuccess(result){
            			console.log("Success:"+result);
        			}
        			function onError(result) {
            			alert("Error:"+result);
        			}
        			window.plugins.CallNumber.callNumber(onSuccess, onError, "9999999999", true);
				},6000);
        	}
  		});
	}).catch(function(e){
  		alert("Error");
	});
	$('.modal').modal();
	$(".cancel-fall").click(function(){
		$('#modal-fall').modal('close');
	});
	$(".contacts").click(function(){
        alert("clicked");
        function onSuccess(result){
            console.log("Success:"+result);
        }
        function onError(result) {
            alert("Error:"+result);
        }
        window.plugins.CallNumber.callNumber(onSuccess, onError, "9999999999", true); 
    });
});