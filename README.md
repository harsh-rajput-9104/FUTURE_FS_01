# Professional Portfolio Website

A complete full-stack personal portfolio website showcasing skills, projects, and achievements.

## Features

- **Frontend**: Responsive design using HTML5, CSS3, and JavaScript (No frameworks).
- **Backend**: Node.js with Express.
- **Database**: MongoDB integration for storing contact form submissions.
- **Email**: Nodemailer integration for sending email notifications on form submission.
- **Validation**: Server-side validation using Joi.
- **SEO**: Optimized with proper meta tags and semantic HTML.

## Project Structure

```
/backend
  /config         # Database configuration
  /models         # MongoDB models
  /routes         # API routes
  .env            # Environment variables
  server.js       # Entry point
/frontend
  index.html      # Main HTML file
  style.css       # Styles
  script.js       # Logic
```

## Setup Instructions

### 1. Backend Setup

1.  Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment Variables:
    - The `.env` file is already created.
    - Update `MONGO_URI` if you have a remote MongoDB (defaults to local).
    - Update `EMAIL_USER` and `EMAIL_PASS` to enable email notifications.

4.  Run the server:
    ```bash
    npm start
    # or
    node server.js
    ```
    The server will run on `http://localhost:5000`.

### 2. Frontend Setup

1.  Navigate to the `frontend` folder.
2.  Open `index.html` in your browser.
    - Recommended: Use "Live Server" extension in VS Code for best experience.
    - Or simply double-click `index.html`.

## Usage

- Scroll through the sections to view details.
- Use the Contact form to send a message. The message will be logged in the database (if connected) and an email will be sent (if credentials provided).

## Notes

- If you don't have MongoDB installed locally, the server will skip the DB connection but still function for other features.
- If you don't provide email credentials, the email sending will be skipped, but the API will still return success for demonstration purposes.
