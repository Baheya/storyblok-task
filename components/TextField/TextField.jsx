export function TextField({
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
  const STYLES = {
    text: 'text-field text-field--inline',
    email: 'text-field text-field--inline',
    textarea: 'text-field text-field--default',
  };

  if (!STYLES[type]) {
    throw Error('Input type not allowed');
  }

  return (
    <>
      {type === 'textarea' ? (
        <div className="text-field__wrapper">
          <label className="text-field__label" htmlFor={id}>
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
              className="text-field__input"
              type={type}
              name={name}
              id={id}
              placeholder={placeholder}
              required={required}
              aria-describedby={`${name}-error`}
              onBlur={onBlur}
              onInvalid={onInvalid}
              onChange={onChange}
            ></textarea>
          </div>
          <p id={`${name}-error`} className="error-message">
            {error}
          </p>
        </div>
      ) : (
        <div className="text-field__wrapper">
          <div className={STYLES[type]}>
            <input
              className="text-field__input"
              type={type}
              name={name}
              id={id}
              placeholder={placeholder}
              required={required}
              aria-describedby={`${name}-error`}
              onBlur={onBlur}
              onInvalid={onInvalid}
              onChange={onChange}
            />
            <label className="text-field__label" htmlFor={id}>
              {label}
              <abbr
                className="text-field__asterisk"
                title="required"
                aria-label="required"
              >
                *
              </abbr>
            </label>
          </div>
          <p id={`${name}-error`} className="error-message">
            {error}
          </p>
        </div>
      )}
    </>
  );
}
