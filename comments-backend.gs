/**
 * Jalsat Tarab Guestbook Backend
 *
 * Deploy as a Google Apps Script Web app:
 *   Execute as: Me
 *   Who has access: Anyone
 * Then paste the /exec URL into COMMENTS_ENDPOINT in script.js.
 */
var ADMIN_EMAIL = "YOUR_EMAIL@example.com";
var SECRET = "CHANGE-THIS-to-your-own-random-secret";

function authorize() {
  sheet_();
  MailApp.getRemainingDailyQuota();
  Logger.log("Authorized OK — sheet ready");
}

function sheet_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty("SHEET_ID");
  var ss = null;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; }
  }
  if (!ss) {
    ss = SpreadsheetApp.create("Jalsat Tarab Guestbook - Separate");
    ss.getSheets()[0].appendRow(["id", "time", "stream", "name", "message", "status"]);
    props.setProperty("SHEET_ID", ss.getId());
  }
  return ss.getSheets()[0];
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}

function escHtml_(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function doPost(e) {
  var p = (e && e.parameter) || {};
  if (p.action !== "submit") return json_({ ok: false });
  if (p.website) return json_({ ok: true });
  var message = String(p.message || "").trim().slice(0, 280);
  var name = String(p.name || "").trim().slice(0, 40) || "Visitor";
  var stream = String(p.poem || "").trim().slice(0, 100);
  var title = String(p.title || "Jalsat Tarab guestbook").trim().slice(0, 200);
  if (!message || !stream) return json_({ ok: false });

  var id = Utilities.getUuid();
  sheet_().appendRow([id, new Date().toISOString(), stream, name, message, "PENDING"]);
  var base = ScriptApp.getService().getUrl();
  var approve = base + "?action=approve&id=" + id + "&token=" + encodeURIComponent(SECRET);
  var reject = base + "?action=hide&id=" + id + "&token=" + encodeURIComponent(SECRET);
  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: "New Jalsat Tarab guestbook note — " + name,
    htmlBody: "<div style='font-size:16px;font-family:sans-serif'><p><b>From:</b> " + escHtml_(name) + "</p><p style='white-space:pre-wrap;border-left:3px solid #a84435;padding-left:12px'>" + escHtml_(message) + "</p><hr><p><a href='" + approve + "'>Approve and publish</a> &nbsp; | &nbsp; <a href='" + reject + "'>Hide</a></p></div>"
  });
  return json_({ ok: true });
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.action === "list") {
    var rows = sheet_().getDataRange().getValues();
    var out = [];
    for (var i = 1; i < rows.length; i++) {
      if (rows[i][5] === "APPROVED" && String(rows[i][2]) === String(p.poem || "")) {
        out.push({ name: rows[i][3], date: rows[i][1], text: rows[i][4] });
      }
    }
    return json_({ ok: true, comments: out.reverse() });
  }
  if ((p.action === "approve" || p.action === "hide") && p.token === SECRET && p.id) {
    var sheet = sheet_();
    var rows2 = sheet.getDataRange().getValues();
    for (var j = 1; j < rows2.length; j++) {
      if (rows2[j][0] === p.id) {
        sheet.getRange(j + 1, 6).setValue(p.action === "approve" ? "APPROVED" : "HIDDEN");
        return HtmlService.createHtmlOutput("<div style='font-family:sans-serif;text-align:center;margin-top:3em'><h2>" + (p.action === "approve" ? "Published" : "Hidden") + "</h2></div>");
      }
    }
  }
  return json_({ ok: false });
}