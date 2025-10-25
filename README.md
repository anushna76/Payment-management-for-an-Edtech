# Payment management for an Edtech
KICKSTART is the name of Edtech.

Payment Management System for an EdTech(KICKSTART)

This is a **Payment Management System** for an EdTech platform built using **HTML, CSS, and JavaScript**.  
It allows students to purchase courses, make payments, and track earnings for instructors, while storing data locally in the browser.

## Features

### Student Dashboard
- Register and login as a student.
- Add courses to the cart with price details.
- Dynamic cart displaying items and total price.
- **Proceed to Pay** functionality with multiple payment options:
  - UPI
  - Card
  - NetBanking
  - Cash on Delivery
- Payment confirmation displayed dynamically using `textContent`.
- Cart automatically cleared after successful payment.
- Payment data saved in `localStorage` for tracking.

### Instructor Dashboard
- Login as an instructor.
- View **total earnings**.
- View **earnings per course**.
- Earnings dynamically updated after student payments.

### Admin Dashboard (Optional)
- Track all payments and user activities (future enhancement).

 ## File Structure

payment-management-system
│
├── index.html # first page where a person can explore the courses
├── login.html # Helps user to login into KIKCKSTART for purchasing courses
├── register.html # User can login after registering
├── student.html # Student dashboard with cart and payment options
├── instructor.html # Instructor dashboard showing earnings
├── admin.html # Admin dashboard
├── script.js # JS for registration, login, and cart operations
├── payment.js # JS for handling payment options
├── styles.css # CSS for styling the pages


## Future Improvements
- Payment Gateway need to be integrated.
- When payment is successful, the successful message should be seen in admin and instructor dashboard.
