# Driftly 

Driftly is a full-stack **MERN car rental platform** where users can browse and book cars, and car owners can list and manage their own fleet through a dedicated dashboard.

**Live App:** [driftly-coral.vercel.app](https://driftly-coral.vercel.app/)
**API:** [driftly-server-phi.vercel.app](https://driftly-server-phi.vercel.app)

---

## Features

**For Users**
- Browse available cars with search and filters
- View detailed car information (brand, model, year, category, fuel type, transmission, seating capacity, price/day, location)
- Check real-time car availability for chosen pickup/return dates
- Book a car and track booking status (pending, confirmed, cancelled)
- View personal booking history on the "My Bookings" page

**For Owners**
- Switch a regular account to an owner role
- Add new cars with an image upload (via ImageKit)
- Toggle car availability or delete a listing
- View and manage all incoming bookings for their cars
- Approve or update booking status
- Dashboard with key stats for their fleet
- Update profile image

**General**
- JWT-based authentication and protected routes
- Password hashing with bcrypt
- Responsive UI with animations (Motion) and toast notifications

---

## Tech Stack

**Frontend (`/client`)**
- React 19 + Vite
- React Router v7
- Tailwind CSS v4
- Axios
- Motion (animations)
- React Hot Toast

**Backend (`/server`)**
- Node.js + Express 5
- MongoDB with Mongoose
- JSON Web Token (JWT) for auth
- bcrypt for password hashing
- Multer + ImageKit for image storage
- CORS, dotenv

**Deployment**
- Both client and server are deployed on Vercel

---

## Project Structure

```
Driftly/
├── client/                 # React frontend
│   ├── src/
│   │   ├── assets/
│   │   ├── components/     # Navbar, Hero, CarCard, Footer, Login, etc.
│   │   │   └── owner/      # Owner-specific components (Sidebar, NavbarOwner, Title)
│   │   ├── context/        # Global app context (AppContext)
│   │   └── pages/          # Home, Cars, CarDetails, MyBookings
│   │       └── owner/      # Dashboard, AddCar, ManageCars, ManageBookings, Layout
│   └── vite.config.js
│
└── server/                 # Express backend
    ├── configs/            # Database (db.js) and ImageKit (imageKit.js) config
    ├── controllers/        # Route logic for user, owner, booking
    ├── middleware/         # Auth (JWT protect) and Multer upload
    ├── models/             # User, Car, Booking (Mongoose schemas)
    ├── routes/             # userRoutes, ownerRoutes, bookingRoutes
    └── server.js            # App entry point
```

---

## API Overview

**User routes** — `/api/user`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/register` | Register a new user | No |
| POST | `/login` | Log in and receive a JWT | No |
| GET | `/data` | Get logged-in user's data | Yes |
| GET | `/cars` | Get all available cars | No |

**Owner routes** — `/api/owner`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/change-role` | Upgrade a user account to owner | Yes |
| POST | `/add-car` | Add a new car (with image upload) | Yes |
| GET | `/cars` | Get all cars listed by the owner | Yes |
| POST | `/toggle-car` | Toggle a car's availability | Yes |
| POST | `/delete-car` | Delete a car listing | Yes |
| GET | `/dashboard` | Get owner dashboard statistics | Yes |
| POST | `/update-image` | Update owner's profile image | Yes |

**Booking routes** — `/api/bookings`
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/check-availability` | Check if a car is available for given dates | No |
| POST | `/create` | Create a new booking | Yes |
| GET | `/user` | Get bookings made by the logged-in user | Yes |
| GET | `/owner` | Get bookings received by the logged-in owner | Yes |
| POST | `/change-status` | Update a booking's status | Yes |

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB database (local or MongoDB Atlas)
- An ImageKit account (for car and profile image uploads)

### 1. Clone the repository
```bash
git clone https://github.com/iamarijit05/Driftly.git
cd Driftly
```

### 2. Set up the server
```bash
cd server
npm install
```

Create a `.env` file inside `/server`:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Run the server:
```bash
npm run server   # development (nodemon)
npm start        # production
```

### 3. Set up the client
```bash
cd ../client
npm install
```

Create a `.env` file inside `/client`:
```env
VITE_BASE_URL=http://localhost:3000
VITE_CURRENCY=$
```

Run the client:
```bash
npm run dev
```

The app should now be running locally, with the client on Vite's default port (`5173`) and the server on the port set in `.env`.

---

## Deployment

Both the `client` and `server` folders include a `vercel.json`, allowing each to be deployed independently as separate Vercel projects. Make sure to set the corresponding environment variables in each project's Vercel dashboard, and update `VITE_BASE_URL` in the client to point to the deployed server URL.

---

## License

This project currently has no license specified. Add one if you intend to open it up for external contributions.
