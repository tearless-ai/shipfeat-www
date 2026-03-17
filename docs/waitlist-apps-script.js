// Google Apps Script — ShipFeat Waitlist
//
// Deploy as a Web App:
//   Apps Script > Deploy > New deployment > Web app
//   Execute as: Me
//   Who has access: Anyone
//
// Spreadsheet ID: 1pJhZgtfmOCvnb1VljhXojdPQiX9ypah997JZ2bSRvKA
// After deploying, copy the Web App URL into lib/constants.ts as WAITLIST_URL.

var SPREADSHEET_ID = "1pJhZgtfmOCvnb1VljhXojdPQiX9ypah997JZ2bSRvKA";

/** Handle CORS preflight */
function doOptions(e) {
  return ContentService
    .createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}

/** Handle POST submissions */
function doPost(e) {
  try {
    var raw = e.postData.contents;
    var body = JSON.parse(raw);

    // Honeypot — bots fill this, humans leave it empty
    if (body.honeypot) {
      return jsonResponse({ success: false, error: "Bot detected" });
    }

    var email = (body.email || "").trim().toLowerCase();
    var firstName = (body.firstName || "").trim();

    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return jsonResponse({ success: false, error: "Invalid email address" });
    }

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheets()[0];
    var rows = sheet.getDataRange().getValues();

    // Deduplicate — skip if email already exists (rows[0] is header)
    for (var i = 1; i < rows.length; i++) {
      var existingEmail = (rows[i][1] || "").toString().trim().toLowerCase();
      if (existingEmail === email) {
        // Already on the list — return success silently so UX is clean
        return jsonResponse({ success: true });
      }
    }

    // Append: [Timestamp, Email, First Name]
    sheet.appendRow([new Date(), email, firstName]);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: "Server error" });
  }
}

function jsonResponse(payload) {
  // Google Apps Script deployed as "Anyone" handles CORS automatically.
  // Access-Control-Allow-Origin: * is set by Google's infrastructure.
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
