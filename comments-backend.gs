/**
 * Jalsat Tarab Guestbook Backend — Google Apps Script
 * ====================================================
 * Moderated guestbook notes for https://jalsattarab.com
 * Same design as the Diwan comments backend.
 *
 * What it does:
 *  - Stores every submitted note as PENDING in a Google Sheet
 *    ("Jalsat Tarab Guestbook", created automatically in your Drive).
 *  - Emails ADMIN_EMAIL each new note with one-click approve / hide links.
 *  - Serves the APPROVED notes to the website (newest first).
 *  - To hide a note later: open the sheet and set its status to HIDDEN.
 *
 * SETUP / REDEPLOY:
 *  1. Open the project at https://script.google.com and replace all
 *     code with this file.
 *  2. In the toolbar select the function "authorize", click Run, and
 *     allow the permissions (Sheets + Mail).
 *  3. Deploy → Manage deployments → edit the existing deployment →
 *     Version: New version → Deploy. (Keeping the same deployment keeps
 *     the /exec URL that script.js already uses.)
 *       - Execute as: Me
 *       - Who has access: Anyone
 */
var ADMIN_EMAIL = "montasir.abbas@gmail.com";
var SECRET = "vINltgML8xGZs-sKSX364hgoS5KkENYG";

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
    ss = SpreadsheetApp.create("Jalsat Tarab Guestbook");
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
    subject: "رسالة جديدة في دفتر زوار جلسة طرب — " + name,
    htmlBody:
      "<div dir='rtl' style='font-size:16px;font-family:sans-serif'>" +
      "<p><b>الاسم:</b> " + escHtml_(name) + "</p>" +
      "<p style='white-space:pre-wrap;border-right:3px solid #d4ab4f;padding-right:12px'>" + escHtml_(message) + "</p><hr>" +
      "<p style='font-size:18px'><a href='" + approve + "'>&#9989; الموافقة والنشر</a>" +
      " &nbsp;&nbsp;|&nbsp;&nbsp; <a href='" + reject + "'>&#128683; إخفاء</a></p>" +
      "<p style='color:#777;font-size:13px'>Approve and publish / Hide</p></div>"
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
        return HtmlService.createHtmlOutput("<div dir='rtl' style='font-family:sans-serif;text-align:center;margin-top:3em'><h2>" + (p.action === "approve" ? "&#9989; نُشرت الرسالة على الموقع" : "&#128683; أُخفيت الرسالة") + "</h2></div>");
      }
    }
    return HtmlService.createHtmlOutput("<h2>لم يتم العثور على الرسالة</h2>");
  }
  return json_({ ok: false });
}