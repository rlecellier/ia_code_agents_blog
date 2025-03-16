const theme = {
  colors: {
    primary: '#3498db',      // A nice blue color
    secondary: '#2ecc71',    // A complementary green
    accent: '#9b59b6',       // Purple for accents
    background: '#f5f7fa',   // Light gray background
    text: '#2c3e50',         // Dark blue-gray for text
    lightText: '#7f8c8d',    // Lighter text for secondary information
    white: '#ffffff',
    black: '#000000',
    error: '#e74c3c',        // Red for errors
    warning: '#f39c12',      // Orange for warnings
    success: '#27ae60',      // Green for success messages
    card: '#ffffff',         // White for card backgrounds
    border: '#dfe6e9',       // Light gray for borders
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "'Merriweather', serif",
    code: "'Source Code Pro', monospace",
  },
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    xxl: '1.5rem',    // 24px
    xxxl: '2rem',     // 32px
    xxxxl: '2.5rem',  // 40px
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    xxl: '3rem',      // 48px
  },
  borderRadius: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '1rem',       // 16px
    circle: '50%',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  }
};

export default theme;