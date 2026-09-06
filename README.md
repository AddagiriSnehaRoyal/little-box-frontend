# A Little Box of Love — Frontend 💝

> Something tiny, made with you in mind.

## 🌷 Overview

The frontend of **A Little Box of Love** is a React-based web application designed to create a personalized digital gift box.

Users can enter details about the person they want to create the box for, choose a theme, add different types of memories and messages, preview the package, and generate a shareable package experience.

The frontend focuses heavily on creating a cute, emotional, interactive, and responsive user experience.

---

## ✨ Features

- Beautiful landing page
- Create a personalized package
- Add sender and receiver names
- Add package title and message
- Select package themes
- Add multiple types of content
- Write personal notes
- Upload photos
- Upload videos
- Add voice messages
- Share meaningful locations
- Add songs
- Add digital gifts
- Upload drawings
- Remove added content
- Preview the complete package
- Open/reveal package experience
- Generate package-specific URLs
- Responsive design
- Smooth animations and transitions
- Scroll-to-top navigation
- Backend API integration
- Cloudinary media upload integration

---

## 📝 Available Content

### Note

Allows the creator to write a personal message.

Contains:

- Title
- Text
- Style

### Photo

Allows the creator to upload a photograph.

Photos are uploaded to Cloudinary and the returned URL is stored with the package.

### Video

Allows the creator to upload a video.

The video is stored on Cloudinary and accessed through its permanent URL.

### Voice

Allows the creator to add a voice message.

The resulting audio URL is stored with the package.

### Location

Allows the creator to share a meaningful location.

Location information can contain:

- Title
- Address
- Location URL

### Song

Allows the creator to add a song.

Song information can contain:

- Title
- Artist
- Song URL

### Gift

Allows the creator to add a digital gift or surprise.

Gift information can contain:

- Title
- Message
- Gift URL

### Drawing

Allows the creator to add a personal drawing.

The drawing image is uploaded to Cloudinary.

---

## 🔄 Application Flow

```text
Home
 ↓
Create Package
 ↓
Enter Package Details
 ↓
Choose Theme
 ↓
Add Content
 ↓
Add Notes / Photos / Videos / Voice /
Locations / Songs / Gifts / Drawings
 ↓
Preview Package
 ↓
Save Package
 ↓
Generate Package Link
 ↓
Open Package
 ↓
Reveal Package
Frontend Structure
frontend/
│
├── src/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   └── content/
│   │       ├── NoteEditor.jsx
│   │       ├── PhotoUploader.jsx
│   │       ├── VideoUploader.jsx
│   │       ├── VoiceRecorder.jsx
│   │       ├── LocationPicker.jsx
│   │       ├── SongPicker.jsx
│   │       ├── GiftPicker.jsx
│   │       └── DrawingUploader.jsx
│   │
│   ├── context/
│   │   └── PackageContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── CreatePackage.jsx
│   │   ├── CreatePackage.css
│   │   ├── AddContent.jsx
│   │   ├── AddContent.css
│   │   ├── PackagePreview.jsx
│   │   ├── PackagePreview.css
│   │   ├── OpenBox.jsx
│   │   ├── OpenBox.css
│   │   ├── PackageReveal.jsx
│   │   └── PackageReveal.css
│   │
│   ├── utils/
│   │   └── packageStorage.js
│   │
│   ├── App.jsx
│   ├── ScrollToTop.jsx
│   └── main.jsx
│
├── public/
│
├── package.json
└── ...
🧩 Main Components
Home.jsx

The landing page of the application.

It introduces the concept of the digital love box and provides navigation into the package creation process.

CreatePackage.jsx

Collects:

Sender name
Receiver name
Package title
Personal message
Theme
AddContent.jsx

The main content creation page.

It manages the selection and addition of all content types.

It also allows users to remove content and continue adding additional items.

PackagePreview.jsx

Displays the package before it is finalized.

OpenBox.jsx

Provides the interactive package-opening experience.

PackageReveal.jsx

Displays the contents after the package has been opened.

Navbar.jsx

Provides application navigation.

ScrollToTop.jsx

Automatically moves the page to the top when navigating between routes.

🧠 State Management

The project uses React Context API for package-level state.

Example:

{
  fromName: "",
  toName: "",
  title: "",
  message: "",
  theme: "",
  contents: []
}

The contents array contains the different pieces of content added by the creator.

🛣️ Routing

React Router manages navigation between application screens.

Important routes include:

/
 /create
 /add-content
 /package/preview
 /package/:id

The dynamic package route allows a saved package to be opened using its unique ID.

Example:

/package/1786533835135
☁️ File Uploads

The frontend sends media files to the backend.

Upload flow:

Frontend
   ↓
POST /api/upload
   ↓
Backend
   ↓
Cloudinary
   ↓
Cloudinary URL
   ↓
Package data

The frontend stores the returned Cloudinary URL instead of depending on temporary browser Blob URLs.

🔗 Backend Connection

Production backend:

https://little-box-backend.onrender.com

Frontend API configuration can be provided through:

VITE_API_URL=https://little-box-backend.onrender.com
💻 Installation

Clone the frontend repository and enter the frontend directory:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev
🏗️ Production Build

Create a production build:

npm run build

Preview the production build:

npm run preview
🚀 Vercel Deployment

The frontend is designed to be deployed separately on Vercel.

Recommended configuration:

Root Directory: frontend
Framework: Vite
Build Command: npm run build
Output Directory: dist

Add the backend URL as an environment variable:

VITE_API_URL
📱 Responsive Design

The frontend is designed for:

Desktop
Laptop
Tablet
Mobile

CSS media queries are used to adapt:

Layouts
Cards
Typography
Buttons
Spacing
Content sections
🎀 UI/UX Design

The interface follows a soft, romantic, and playful design direction.

The design uses:

Rounded cards
Soft visual elements
Cute typography
Animated interactions
Floating decorative elements
Smooth transitions
Responsive layouts
Emotional microcopy

The objective is to make the application feel like opening a personal gift.

🔐 Frontend Security

Do not place private credentials inside frontend code.

Especially avoid exposing:

MongoDB credentials
Cloudinary API secret
Backend private keys

Only public configuration values should be available to the frontend.

🐛 Common Issues
Backend connection fails

Check:

VITE_API_URL

and make sure it points to the deployed backend.

Upload does not work

Check:

Backend is running
/api/upload exists
Cloudinary is configured
CORS is configured
File is valid
Direct package URL gives 404

Make sure the deployment supports React SPA routes and that the /package/:id route is configured correctly.

🌱 Future Improvements

Possible frontend improvements:

More themes
More animations
Drag-and-drop content
Content editing
Background music
Custom fonts
QR code generation
Better drawing tools
More package reveal animations
Authentication UI
Password-protected packages
Improved accessibility
