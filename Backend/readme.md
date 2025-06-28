# 🌟 Vishu Welfare Association – Admin Dashboard

This is the **Admin Dashboard** for **Vishu Welfare Association**, built to manage and monitor all backend operations of the welfare initiative. It enables administrators to manage content, donations, volunteers, gallery images, blogs, testimonials, and more with transparency and accountability.

---

##  Roles & Permissions

| Feature                       | Admin | Superadmin |
|------------------------------|-------|-------------|
| Manage Blogs                 | ✅     | ✅           |
| Manage News                  | ✅     | ✅           |
| Manage Testimonials          | ✅     | ✅           |
| Handle Volunteer Requests    | ✅     | ✅           |
| View Donation & Charts       | ❌     | ✅           |
| Manage Admin Users           | ❌     | ✅           |

##  Dashboard Overview

The Admin Dashboard provides a central interface for:
- Monitoring donation stats
- Managing work area content (Education, Plantation, Food Distribution, Health)
- Handling team members and volunteers
- Updating gallery, blogs, and news
- Publishing testimonials and reports

---

##  Core Features

###  Fearures
- Donations
- manage Gallery Items
- manage Volunteers
- manage Blogs & News
- manage Testimonials
- manage Active Categories
- manage Our Work Space



---


### Donation Management
- Record new donations
- Categorize donations by work area
- View donation history
- Filter by date, status, or method (UPI, PayPal, etc.)
- Generate donation reports
- Track fund usage for accountability

###  Gallery Management
- Upload images by category
- View/delete gallery entries
- Assign uploads to work areas

###  Blog & News Management
- Create, update, delete blogs
- Share latest news, events, announcements

###  Testimonial Management
- Approve and publish testimonials from volunteers, beneficiaries, and donors
- Display on the public website

###  Volunteer Management
- View registered volunteers
- Add/update volunteer information
- Export volunteer data

###  Dynamic Category Management
- Create categories for gallery, blogs, and donations
- Easily manage and update categories from admin panel


---

## 🔐 Authentication & Authorization
- Admin login system (JWT-based)
- Role-based access (admin only)
- Secure endpoints for all sensitive operations

---

### Routes

## routes/donations.js
- POST /donations → Record new donation 

- GET /donations → View all donations (with filters: date, method, status)

- GET /donations/report → Generate donation reports

- GET /donations/:id → View single donation

## routes/gallery.js
- POST /gallery → Upload image

- GET /gallery → View all images (filter by category/work area)

- DELETE /gallery/images → Delete images

## routes/blogs.js
- POST /blogs → Create blog/news

- GET /blogs → Get all blogs/news

- GET /blogs/:id → Get single blog

- PATCH /blogs/:id → Update blog/news

- DELETE /blogs/:id → Delete blog/news

## routes/testimonials.js
- GET /testimonials → Get all testimonials

- POST /testimonials → Submit new testimonial

- PATCH /testimonials/:id/approve → Approve testimonial

- DELETE /testimonials/:id → Delete testimonial

## routes/volunteers.js
- GET /volunteers → View all volunteers

- POST /volunteers → Add new volunteer

- PATCH /volunteers/:id → Update volunteer

- GET /volunteers/export → Export volunteer data

## routes/categories.js
POST /categories → Create category

- GET /categories → Get all categories

- PATCH /categories/:id → Update category

- DELETE /categories/:id → Delete category

## 🖼 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Recharts / Chart.js
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Auth:** JWT-based authentication
- **File Upload:** Multer (for images/files)
- **Charts:** Donation stats via Recharts / ApexCharts
- **Optional Integration:** Razorpay / PayPal / UPI for donation payments

---




