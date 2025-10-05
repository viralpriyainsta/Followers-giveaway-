// This is an asynchronous function that handles incoming requests.
exports.handler = async function(event, context) {
  // Get the username from the URL query parameter named 'subid1'.
  const username = event.queryStringParameters.subid1 || 'no_username_provided';

  // This is the Google Sheets Web App URL you created.
  const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbxU4bk9Hqz8Te7ayAd8yf_ly6k4l5PacS24ZhPDV7ajCj3QtxCZz_-cfWTDkNJkSo4p/exec';

  // Prepare the data to be sent to Google Sheets.
  const postData = new URLSearchParams({
    username: username
  });

  try {
    // Use the 'fetch' API to send a POST request to your Google Sheet.
    await fetch(googleSheetUrl, {
      method: 'POST',
      body: postData
    });

    // Return a success message. OGAds will see this response.
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Username sent to Google Sheet' })
    };
  } catch (error) {
    // If an error occurs, log it and return an error message.
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send data' })
    };
  }
};
