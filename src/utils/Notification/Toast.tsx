import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import type { NotificationType } from './NotificationContext';

interface ToastProps {
  message: string;
  type: NotificationType;
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 4000, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setIsMounted(true), 10);
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onClose, 300);
    }, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onClose, duration]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'line-md:confirm-circle';
      case 'error':
        return 'line-md:close-circle';
      case 'warning':
        return 'line-md:alert-circle';
      case 'alert':
        return 'line-md:alert';
      case 'delete':
        return 'line-md:close-circle';
      default:
        return 'entypo:info';
    }
  };

  const getColorClass = () => {
    return 'border-white/10';
  };

  const getIconColor = () => {
    switch (type) {
      case 'success': return '#7C40A0';
      case 'error':
      case 'delete': return '#ef4444';
      case 'warning': return '#fb923c';
      case 'alert': return '#facc15';
      default: return '#FEFE86';
    }
  };

  return (
    <div
      className={`flex items-center gap-4 px-6 py-4 rounded-[4px] border min-w-[150px] max-w-[350px] transition-all duration-[300ms] ease-in-out transform ${
        (!isMounted || isExiting) ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
      } ${getColorClass()}`}
      style={{
        backgroundColor: 'rgba(28, 28, 28)'
      }}
    >
      <Icon 
        icon={getIcon()} 
        className="w-7 h-7 flex-shrink-0" 
        style={{ color: getIconColor() }} 
      />
      <p className="flex-1 font-dalton-semibold text-base text-white break-words">{message}</p>
      <button
        onClick={() => {
          setIsExiting(true);
          setTimeout(onClose, 300);
        }}
        className="hover:opacity-70 transition-opacity text-white/50 hover:text-white"
      >
        <Icon icon="line-md:close" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
