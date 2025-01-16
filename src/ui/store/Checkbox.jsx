import React from 'react';

const Checkbox = ({ checked, indeterminate, onChange, disabled }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={`h-3 w-3 rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    />
  );
};

export default Checkbox;
