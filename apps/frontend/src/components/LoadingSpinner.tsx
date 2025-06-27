interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex justify-center items-center p-8 ${className}`}>
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-orange-500 ${sizeClasses[size]}`}
      />
      <span className="ml-2 text-gray-600">加载中...</span>
    </div>
  );
}
