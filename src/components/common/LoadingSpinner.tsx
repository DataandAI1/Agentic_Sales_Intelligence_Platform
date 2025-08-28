import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  message = 'Loading...' 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-6 h-6';
      case 'large':
        return 'w-16 h-16';
      default:
        return 'w-10 h-10';
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div 
        style={{
          width: size === 'small' ? '24px' : size === 'large' ? '64px' : '40px',
          height: size === 'small' ? '24px' : size === 'large' ? '64px' : '40px',
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #00D4AA',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      {message && (
        <p style={{
          marginTop: '12px',
          fontSize: '14px',
          color: '#666',
          textAlign: 'center'
        }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;