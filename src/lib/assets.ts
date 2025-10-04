// Utility function to get the correct asset path for both development and production
export const getAssetPath = (path: string) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use Vite's import.meta.env to check the mode
  const isDev = import.meta.env.MODE === 'development' || import.meta.env.DEV;
  
  // In development, use the path as is
  if (isDev) {
    return `/${cleanPath}`;
  }
  
  // In production (GitHub Pages), prepend the base path
  return `/leticia-amen-portfolio-c60c95a0/${cleanPath}`;
};

// Function that uses the base URL from Vite config (recommended)
export const getPublicAssetPath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL;
  // Ensure base ends with / but doesn't double up
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
};