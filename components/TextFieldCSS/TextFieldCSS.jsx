export function TextFieldCSS({
  label,
  placeholder,
  type = 'text',
  name,
  id,
  required,
  error,
}) {
  const STYLES = {
    text: 'tfc text-field text-field--inline',
    email: 'tfc text-field text-field--inline',
    textarea: 'tfc text-field text-field--default',
  };

  if (!STYLES[type]) {
    throw Error('Input type not allowed');
  }

  return (
    <div className="tfc text-field__wrapper">
      <div className={STYLES[type]}>
        <label className="tfc text-field__label" htmlFor={id}>
          {label}
          <abbr
            className="text-field__asterisk"
            title="required"
            aria-label="required"
          >
            *
          </abbr>
        </label>
        {type === 'textarea' ? (
          <textarea
            className="tfc text-field__input"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            aria-describedby={`${name}-error`}
          ></textarea>
        ) : (
          <input
            className="tfc text-field__input"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            aria-describedby={`${name}-error`}
          />
        )}
      </div>
      <p id={`${name}-error`} className="error-message">
        {error}
      </p>
    </div>
  );
}
