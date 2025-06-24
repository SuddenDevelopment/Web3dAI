import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      zIndex: 100,
    }}>
      <Link 
        to="/shaders" 
        style={{
          color: 'white',
          textDecoration: 'none',
          background: 'rgba(255,6,181,0.8)',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          border: '2px solid #FF06B5',
          boxShadow: '0 0 10px #FF06B5',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 20px #FF06B5';
          e.currentTarget.style.background = 'rgba(255,6,181,1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 10px #FF06B5';
          e.currentTarget.style.background = 'rgba(255,6,181,0.8)';
        }}
      >
        Shaders Gallery →
      </Link>
    </div>
  );
}