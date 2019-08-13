
  var database = firebase.database();
  
  // 2. Submit Button Press
  $("#user_submit_btn").on("click", function(event) {
    

  
    // Grabs user input
    var userName= $("#userName").val().trim();
    var userEmail = $("#userEmail").val().trim();
    var userMessage = $("#userMessage").val().trim();
  
    console.log(userName);
    console.log(userEmail);
    console.log(userMessage);

    var submitDate = moment().format('YYYY/MM/D hh:mm:ss SSS');
    console.log(submitDate)
    var submitDateDefault = Date.now();
    console.log(submitDateDefault);

    // Creates local "temporary" object for holding data
    var firebaseInput = {
      name: userName,
      email: userEmail,
      message: userMessage,
      dateSubmitted: submitDate,
      timestampSubmitted:submitDateDefault
    };
  
    // Uploads data to the database
    database.ref().push(firebaseInput);
  
    // Logs everything to console
    console.log(firebaseInput.name);
    console.log(firebaseInput.email);
    console.log(firebaseInput.message);
    console.log(firebaseInput.dateSubmitted);
    console.log(firebaseInput.timestampSubmitted);
  
   
  
    // Clears all of the text-boxes
    $("#userName").val("");
    $("#userEmail").val("");
    $("#userMessage").val("");

    //alerts the user that the response has been recorded

    $("#submit-successful-text").html("<p>Your response has been recorded, thank you.</p>");

  });
  