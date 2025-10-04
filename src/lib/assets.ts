// Utility function to get the correct asset path for both development and production
export const getAssetPath = (path: string) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production (GitHub Pages), prepend the base path
  return `/leticia-amen-portfolio-c60c95a0/${cleanPath}`;
};