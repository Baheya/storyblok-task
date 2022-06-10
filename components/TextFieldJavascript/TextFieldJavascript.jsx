import { useState } from 'react';

export function TextFieldJavascript({
  label,
  placeholder,
  type = 'text',
  onInvalid,
  onBlur,
  onChange,
  name,
  id,
  required,
  error,
}) {
  const [isLabelFloating, setIsLabelFloating] = useState(false);

  const STYLES = {
    text: 'tfj text-field text-field--inline',
    email: 'text-field text-field--inline',
    textarea: 'tfj text-field text-field--default',
  };

  if (!STYLES[type]) {
    throw Error('Input type not allowed');
  }

  function handleFloatingLabel(e) {
    if (e.target.value) {
      setIsLabelFloating(true);
    } else if (!e.target.value) {
      setIsLabelFloating(false);
    }
  }

  return (
    <>
      {type === 'textarea' ? (
        <div className="tjf text-field__wrapper">
          <label className={'tfj text-field__label'} htmlFor={id}>
            {label}
            <abbr
              className="text-field__asterisk"
              title="required"
              aria-label="required"
            >
              *
            </abbr>
          </label>
          <div className={STYLES[type]}>
            <textarea
              className="tfj text-field__input"
              type={type}
              name={name}
              id={id}
              placeholder={placeholder}
              required={required}
              aria-describedby={`${name}-error`}
              onBlur={onBlur}
              onInvalid={onInvalid}
              onChange={(e) => {
                handleFloatingLabel(e);
                onChange(e);
              }}
            ></textarea>
          </div>
          <p id={`${name}-error`} className="error-message">
            {error}
          </p>
        </div>
      ) : (
        <div className={STYLES[type]}>
          <label
            className={
              isLabelFloating
                ? 'tfj text-field__label text-field__label--float'
                : 'tfj text-field__label'
            }
            htmlFor={id}
          >
            {label}
            <abbr
              className="text-field__asterisk"
              title="required"
              aria-label="required"
            >
              *
            </abbr>
          </label>

          <input
            className="tfj text-field__input"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            aria-describedby={`${name}-error`}
            onBlur={onBlur}
            onInvalid={onInvalid}
            onChange={(e) => {
              handleFloatingLabel(e);
              onChange(e);
            }}
          />
          <p id={`${name}-error`} className="error-message">
            {error}
          </p>
        </div>
      )}
    </>
  );
}
