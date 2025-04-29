import React from 'react';

const Overlay = () => (
    <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(100% - 80px)',
        height: 'calc(100% - 80px)',
        margin: '40px',
        border: '4px solid #FF06B5',
        borderRadius: '10px',
        boxShadow: '0 0 20px #FF06B5',
        pointerEvents: 'none',
    }}>
        <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: '#00ffcc', fontSize: '48px', fontStyle: 'italic' }}>
          {/* Top-left corner content */}
          Adventures in 3D
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px', color: '#FF06B5', fontSize: '36px' }}>
          {/* Top-right corner content */}
          2025 - 1
        </div> 
        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '10px', color: '#00ffcc', fontSize: '36px' }}>
          {/* Bottom-left corner content */}
          This is in the browser, animated and interactive
        </div>
        <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '10px', color: '#00ffcc', fontSize: '48px' }}>
          {/* Bottom-right corner content */}
          Now with AI!
        </div>
    </div>
);

export default Overlay;