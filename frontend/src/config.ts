// Environment configuration for API endpoints

const config = {
  // Use production API URL when built, localhost for development
  apiUrl: import.meta.env.PROD
    ? "https://api.thirty-four.co.in" // Custom domain for API
    : "http://localhost:8000",

  // Base path for API routes
  apiBasePath: "/api",

  // Full API URL
  get fullApiUrl() {
    return `${this.apiUrl}${this.apiBasePath}`;
  },
};

export default config;
