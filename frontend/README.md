Welcome to the **Xplore Singapore Frontend Application**!

This guide provides step-by-step instructions to help new users get started quickly and effectively.

## **Table of Contents**

1. [Prerequisites](#prerequisites)
2. [Setting Up the Project](#setting-up-the-project)
   - [2.1 Clone the Repository](#clone-the-repository)
   - [2.2 Install Dependencies](#install-dependencies)
   - [2.3 Set Up Environment Variables](#set-up-environment-variables)
3. [Running the Application](#running-the-application)
   - [3.1 Development Mode](#development-mode)
   - [3.2 Building for Production](#building-for-production)
   - [3.3 Preview Production Build](#preview-production-build)
4. [Running in Docker](#running-in-docker)
   - [4.1 Build the Docker Image](#build-the-docker-image)
   - [4.2 Run the Docker Container](#run-the-docker-container)
5. [File Structure](#file-structure)
6. [Development Tips](#development-tips)
   - [6.1 Hot Module Replacement (HMR)](#hot-module-replacement-hmr)
   - [6.2 Debugging](#debugging)
   - [6.3 Customizing TailwindCSS](#customizing-tailwindcss)
7. [Deploying the Application](#deploying-the-application)
8. [Troubleshooting](#troubleshooting)
   - [8.1 Common Issues](#common-issues)
   - [8.2 Debugging in Docker](#debugging-in-docker)

---

## **Prerequisites**

Before using the application, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js) or **yarn** (optional)
- **Docker** (optional, for containerized development)

---

## **Setting Up the Project**

### **Clone the Repository**

Clone the application repository to your local machine:

```bash
git clone git@github.com:sree-r-one/SWE5006.git
cd frontend
```

### **Install Dependencies**

Install all the required dependencies using npm or yarn:

```bash
npm install
```

### **Set Up Environment Variables**

The application uses environment variables for configuration. Create a `.env` file in the root directory based on the `.env.example` file:

```bash
cp .env.example .env
```

Update the values in `.env` as required. For example:

```env
VITE_BASE_URL=http://localhost:3000
```

---

## **Running the Application**

### **Development Mode**

Run the application in development mode:

```bash
npm run dev
```

Access the application in your browser at:

```
http://localhost:3000
```

### **Building for Production**

To build the application for production:

```bash
npm run build
```

The build files will be output to the `dist/` directory.

### **Preview Production Build**

Preview the production build locally:

```bash
npm run preview
```

Access the preview at:

```
http://localhost:4173
```

---

## **Running in Docker**

If you prefer to use Docker for containerized development:

### **Build the Docker Image**

Run the following command to build the Docker image:

```bash
docker build -t react-vite-app .
```

### **Run the Docker Container**

Run the application in a Docker container:

```bash
docker run -it --rm -v $(pwd):/app -p 3000:3000 react-vite-app
```

Access the application at:

```
http://localhost:3000
```

---

## **File Structure**

The project structure is as follows:

```
my-app/
├── src/
│   ├── components/    # Reusable React components
│   ├── pages/         # Application pages
│   ├── styles/        # TailwindCSS and custom styles
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
├── package.json       # Project metadata and dependencies
└── Dockerfile         # Docker configuration
```

---

## **Development Tips**

### **Hot Module Replacement (HMR)**

HMR is enabled by default in development mode. Any changes you make to the code will automatically reflect in the browser without refreshing.

### **Debugging**

To debug the application, use your browser’s developer tools. If running in Docker, ensure the `vite.config.ts` file has the following configuration for HMR:

```typescript
server: {
  host: '0.0.0.0',
  port: 3000,
  watch: {
    usePolling: true,
  },
  hmr: {
    host: 'localhost',
    clientPort: 3000,
  },
},
```

### **Customizing TailwindCSS**

Modify the `tailwind.config.js` file to extend or customize the default TailwindCSS configuration.

---

## **Deploying the Application**

To deploy the application:

1. Build the production files:
   ```bash
   npm run build
   ```
2. Serve the static files in the `dist/` folder using a hosting service like:
   - [Vercel](https://vercel.com)
   - [Netlify](https://www.netlify.com)
   - [AWS S3](https://aws.amazon.com/s3/)
   - [Docker](#4-running-in-docker)

---

## **Troubleshooting**

### **Common Issues**

- **Environment Variables Not Loaded:**
  Ensure you’ve created a `.env` file and added the necessary variables.

- **HMR Not Working in Docker:**
  Ensure `vite.config.ts` has `usePolling: true` and the container has proper volume mounting.

### **Debugging in Docker**

To debug inside the Docker container:

```bash
docker exec -it <container_id> sh
```
