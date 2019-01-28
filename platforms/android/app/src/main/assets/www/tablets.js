$(document).ready(function() {
    var rootRef = firebase.database().ref().child("Tablets");
    rootRef.on("child_added",snap=>{
        var name = snap.child("name").val();
        var dosage = snap.child("dosage").val();
        $(".reminder-cards").append(
            ""
        );
    });
});
