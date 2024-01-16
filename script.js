//your JS code here. If required.
function handleConfirmation() {
    // Use confirm to show a confirmation dialog
    var userConfirmation = confirm("Do you want to proceed?");

    // Check user's response
    if (userConfirmation) {
      // If OK is clicked, show an alert for proceeding
      alert("You clicked OK. Proceeding...");
    } else {
      // If Cancel is clicked, show an alert for exiting
      alert("You clicked Cancel. Exiting...");
    }
  }

  // Call the function when the page loads (for demonstration purposes)
  handleConfirmation();