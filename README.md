# FKC Institute of Computer – Website

A modern, fully responsive, professional website for **FKC Institute of Computer**.

## Features

- **7 Main Pages**: Home, About Us, Courses, Admissions, Teachers/Staff, Gallery, Contact Us
- **Admin Dashboard**: Secure-looking login + management panel for students, courses, admissions, announcements, gallery & contact info
- Clean blue / white / dark professional education theme
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations
- Online admission form with success feedback
- Contact form
- WhatsApp floating button
- Gallery with lightbox
- SEO-friendly meta tags & semantic HTML
- Modern typography (Inter + Poppins)
- Font Awesome icons
- Realistic educational images (Unsplash)

## How to Open

1. Open `index.html` in any modern browser.
2. Or serve the folder with a local server (recommended for full features):

```bash
# Using Python
cd fkc-institute
python -m http.server 8080

# Then visit: http://localhost:8080
```

## Admin Panel

- URL: `/admin/` or `admin/index.html`
- **Demo credentials**:
  - Username: `admin`
  - Password: `fkc2026`

## File Structure

```
fkc-institute/
├── index.html          # Home
├── about.html
├── courses.html
├── admissions.html
├── teachers.html
├── gallery.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── admin/
│   ├── index.html      # Login
│   └── dashboard.html  # Dashboard
└── README.md
```

## Customization Notes

- Replace phone numbers, email, address, and Google Maps embed with your real details.
- Update social media links in the footer.
- Swap Unsplash image URLs with your own photos if desired.
- The admission & contact forms currently show success messages client-side (no backend). Connect to a form service or backend when ready.

---

© 2026 FKC Institute of Computer
