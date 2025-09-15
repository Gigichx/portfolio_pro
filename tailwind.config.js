module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#0f0f0f", // Deep canvas for content focus
        secondary: "#1a1a1a", // Subtle surface elevation and depth
        accent: "#64ffda", // Strategic highlights and interactive states
        
        // Background Colors
        background: "#000000", // True black for maximum contrast moments
        surface: "#262626", // Card backgrounds and content containers
        
        // Text Colors
        "text-primary": "#ffffff", // High contrast reading for extended content
        "text-secondary": "#a3a3a3", // Clear hierarchy without harsh contrast
        
        // Status Colors
        success: "#10b981", // emerald-500 - Positive feedback and completed states
        warning: "#f59e0b", // amber-500 - Attention without alarm for form guidance
        error: "#ef4444", // red-500 - Clear problem indication with helpful tone
        
        // Border Colors
        border: "#262626", // Minimal border approach
        "border-accent": "#64ffda", // Active states and primary interactive elements
        
        // Additional semantic colors
        emerald: {
          500: "#10b981"
        },
        amber: {
          500: "#f59e0b"
        },
        red: {
          500: "#ef4444"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Source Sans Pro', 'sans-serif'], // Default sans font
        heading: ['Inter', 'sans-serif'], // For headings
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'title': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'modal': '0 10px 25px -3px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(100, 255, 218, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(100, 255, 218, 0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}