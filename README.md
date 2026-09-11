# Jalsat Tarab

The guestbook is intentionally separate from the Diwan project.

## Separate guestbook setup

1. Open [Google Apps Script](https://script.google.com) and create a new project.
2. Copy the contents of `comments-backend.gs` into the project.
3. Set `ADMIN_EMAIL` to the email that should receive moderation messages.
4. Replace `SECRET` with a private random phrase.
5. Run `authorize` once and approve the requested permissions.
6. Deploy as a Web app with **Execute as: Me** and **Who has access: Anyone**.
7. Copy the deployment URL ending in `/exec`.
8. Paste it into `COMMENTS_ENDPOINT` in `script.js`.

This creates a new spreadsheet named `Jalsat Tarab Guestbook - Separate`. It does not use the Diwan spreadsheet or Diwan comments.