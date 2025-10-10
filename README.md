# Hero io Apps Store

A modern **App Store Web Application** designed with **responsive layouts**, intuitive UI, and powerful features to explore, search, install, and manage apps. This project showcases **layout design, state management, interactivity, and localStorage integration**.

---

## 🔹 Project Features

This project consists of several interactive pages, each designed for a specific purpose. The layout includes a custom header, footer, and responsive designs for all devices.

### **Key Features:**

* **Responsive design** for desktop, tablet, and mobile
* **Live search** and filtering of apps
* **Custom install/uninstall features** with `localStorage`
* **App review charts** using the **Recharts** library
* Smooth **page navigation and loading animations**
* **Custom error page** for invalid routes

---

## 📌 Project Structure

```
src/
 ├── components/        # Reusable components like Header, Footer, Cards, etc.
 ├── pages/             # Home, All Apps, App Details, My Installation, Error pages
 ├── assets/            # Images, icons, and assets
 ├── data/              # JSON data for apps
 ├── styles/            # CSS/SCSS files
 ├── App.js
 └── index.js
```

---

## 🖼 Page Previews

### 1️⃣ **Home Page**

**Feature:**
The Home Page is the landing page for the application. It contains:

* A centered banner with heading, description, and buttons linking to the App Store and Play Store
* Three state cards showcasing app highlights
* A section displaying **Top Apps** in a grid layout
* A “Show All” button leading to the All Apps page

**Image Preview:**
![Home Page](/readme-assets/home-page.png)

---

### 2️⃣ **All Apps Page**

**Feature:**
The All Apps Page displays every app in a searchable and filterable list:

* Title section with subtitle
* Total app count and a search bar
* Live search functionality (case-insensitive)
* App cards with title, image, downloads, ratings
* “No App Found” message if no results match search query

**Image Preview:**
![All Apps Page](/readme-assets/all-apps.png)

---

### 3️⃣ **App Details Page**

**Feature:**
The App Details Page displays detailed information about a selected app:

* App image and details (title, rating, downloads, reviews)
* Install button (changes state after click)
* Success toast notification
* Responsive **review chart** using the Recharts library
* Detailed description section

**Image Preview:**
![App Details Page](/readme-assets/app-details.png)

---

### 4️⃣ **My Installation Page**

**Feature:**
The My Installation Page allows users to manage installed apps:

* Displays all installed apps as cards
* Uninstall button removes apps from UI and `localStorage`
* Toast notifications for uninstall actions
* Dropdown to sort apps by downloads (High-Low / Low-High)

**Image Preview:**
![My Installation Page](/readme-assets/installed-apps.png)

---

## ⚙️ Additional Features

* **Custom Header:** Includes logo (links to home), navigation bar with active route highlighting, and a “Contribution” button linking to GitHub profile.
* **Custom Footer:** Unique footer design created for this project.
* **Error Page:** Custom page for invalid routes with a friendly message.
* **Loading Animations:** Smooth animations for page navigation and search operations.

---

## 💾 Local Storage Features

* **App Installation:** Clicking install button saves app data in `localStorage`.
* **Persistent State:** Installed apps remain even after page reload.
* **Uninstall:** Removes app from UI and localStorage.

---

## 🛠 Technologies Used

* HTML, CSS, JavaScript
* React.js
* Recharts
* LocalStorage API