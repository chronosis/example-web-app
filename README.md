# My Fullstack App

This project is a fullstack application built with ExpressJS for the backend and ReactJS for the frontend. It connects to a SQLite database using Prisma ORM.

## Project Structure

```
my-fullstack-app
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── index.ts
│   │   ├── routes
│   │   │   └── index.ts
│   │   └── types
│   │       └── index.ts
│   ├── prisma
│   │   ├── schema.prisma
│   │   └── migrations
│   ├── database
│   │   └── dev.sqlite
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── components
│   │       └── ExampleComponent.tsx
│   ├── public
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── .github
│   └── workflows
│       └── ci-cd.yml
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Docker and Docker Compose
- SQLite

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run migrations to set up the database:
   ```
   npx prisma migrate dev
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

### Running with Docker

To run the application using Docker, use the following command from the root of the project:

```
docker-compose up --build
```

### CI/CD

This project includes a CI/CD pipeline configured with GitHub Actions. The workflow file is located at `.github/workflows/ci-cd.yml`. It automates the build and deployment process to a Docker container.

## License

This project is licensed under the MIT License.