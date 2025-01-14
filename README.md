
# House rental management system


## Project Overview
It is a comprehensive House Rental Management System designed to simplify and streamline property management processes. This application provides tools for landlords and property managers to efficiently manage tenant information, rental payments, property listings, and maintenance requests. Built using modern web technologies, it ensures scalability, security, and ease of use for all stakeholders.

## Key Features:

- User Authentication & Roles:
    - Secure user registration and login
    - Role-based access control for admin and tenant users
- Property Management:
    - Add, edit, and delete property listings.
    - Upload images, videos, and detailed descriptions of properties.
    - Categorize properties by type, size, and location.
- Tenant Management:
    - Create tenant profiles with personal and rental details.
    - Track tenancy history and rental agreements.
    - Notifications for upcoming lease expirations.
- Rental Payments:
    - Record and track rental payments.
    - Online payment gateway integration (PayPal, Stripe, MPesa, etc.).
    - Generate invoices and receipts for tenants.
    - Send payment reminders and notifications(Automated rent reminders).
    - Payment history tracking.
- Maintenance Requests:
    - Tenants can submit maintenance requests.
    - Assign and track maintenance tasks (Real-time tracking of ticket status and updates.).
    - Assign and manage contractors or service providers.
    - Schedule repairs and maintenance work.
- Reporting & Analytics:
    - Generate reports on rental income, expenses, and occupancy rates.
    - Visualize data with charts and graphs.
    - Monitor property performance and financial health.
    - Track overdue payments and pending maintenance requests.
- Communication Tools:
    - In-app messaging system for landlords and tenants.
    - Send notifications, alerts, and reminders.
    - Email and SMS notifications for important events(e.g., rent due, lease expiration).
- Document Management:
    - Store and manage lease agreements, contracts, and legal documents.
    - Digital signing for lease agreements.
    - Secure document sharing with tenants and contractors.
    - Document version control and audit trails.
- Search and Filter:
    - Advanced search and filter options for properties and tenants.
    - Sort properties by price, location, and availability.
    - Filter tenants by lease status, payment history, and contact details.
- Property Availability Calendar:
    - View property availability and schedule showings.
    - Book appointments for property viewings.
    - Sync calendar with Google Calendar or Outlook.
- Customizable Dashboard:
    - Personalized dashboard with widgets and shortcuts for landlord & tenants.
    - Quick access to key metrics, notifications, and tasks.
    - Customizable themes and layouts.

Ideal for real estate managers and landlords looking to `digitize` their workflows!

Let me know if you'd like further adjustments.

## Tech Stack
- NestJS
- PostgreSQL
- Redis (for caching)
- Prisma ORM
- TypeScript
- JWT Authentication

## Prerequisites
- Node.js (v20 or higher)
- PostgreSQL (v16 or higher)
- npm or pnpm
- Redis (for caching)
- Docker (optional)

## Getting Started

### 1. Clone the Repository
```bash
git clone 
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
```bash
# Copy example env file
cp .env.example .env

# Update .env with your database credentials
DATABASE_URL="postgresql://username:password@localhost:5432/pos_db"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# (Optional) Seed the database
npx prisma db seed
```

### 5. Start the Application
```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

## API Documentation

### Base URL
```
http://localhost:8000/api/v1
```

### Authentication
All endpoints except registration and login require JWT authentication.
Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Available Endpoints
Detailed API documentation can be found in `app.http`


### Making Schema Changes
1. Modify `schema.prisma`
2. Create migration:
```bash
npx prisma migrate dev --name describe_your_changes
```

### Code Style
- Follow NestJS best practices
- Use TypeScript strict mode
- Maintain consistent naming conventions
- Write unit tests for new features

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Support
For support, email support@tasklistms.com or create an issue in the repository.

