$(document).ready(function() {
    /*var database = firebase.database();
    var n;
    firebase.database().ref('n').once('value').then(function(snapshot) {
        n = (snapshot.val());
        console.log(n);
        var i;
        for(i=1;i<=n;i++){
            var title = "Reminder Title " + i;
            var des = "Reminder Des " + i;
            firebase.database().ref(title).once('value').then(function(snapshot) {
                $(".reminder-cards").append(
                    "<div class='row'><div class='col s12 m6'><div class='card blue-grey darken-1'><div class='card-content white-text'>          <span class='card-title'>"+title+"</span><p>"+des+"</p></div><div class='card-action'><a href='#'>This is a link</a><a href='#'>This is a link</a></div></div></div></div>"
                );
            });
        }
    });*/
    var rootRef = firebase.database().ref().child("Reminders");
    rootRef.on("child_added",snap=>{
        var title = snap.child("Title").val();
        var des = snap.child("Message").val();
        /*$(".reminder-cards").append(
            "<div class='reminder-card'><p class='reminder-title'>"+title+"</p><hr width='100%;'><p class='reminder-body'>"+des+"</p><div class='reminder-actions  blue lighten-1'><p><i class='material-icons'>done</i></p></div><div class='reminder-actions red'><p><i class='material-icons'>cancel</i></p></div></div>"
        );*/
    });
});
