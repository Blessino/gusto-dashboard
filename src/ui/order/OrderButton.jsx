import React, { Children } from 'react';

function OrderButton({ onClick }) {
    
  return (
    <div>
      <button onClick={() => onClick, isActive} className="active:text-blue-400">
        {Children}
      </button>
    </div>
  );
}

export default OrderButton;
