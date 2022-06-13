export function TextFieldCSS({
  label,
  placeholder,
  type = 'text',
  name,
  id,
  required,
  error,
  pattern,
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
    <>
      {type === 'textarea' ? (
        <div className={STYLES[type]}>
          <label className="tfc text-field__label" htmlFor={id}>
            {label}
            <abbr
              className="tfc text-field__asterisk"
              title="required"
              aria-label="required"
            >
              *
            </abbr>
          </label>

          <textarea
            className="tfc text-field__input"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            aria-describedby={`${name}-error`}
          ></textarea>

          <p id={`${name}-error`} className="text-field__error-message">
            {error}
          </p>
        </div>
      ) : (
        <div className={STYLES[type]}>
          <input
            className="tfc text-field__input"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            aria-describedby={`${name}-error`}
            pattern={pattern}
          />
          <label className="tfc text-field__label" htmlFor={id}>
            {label}
            <abbr
              className="tfc text-field__asterisk"
              title="required"
              aria-label="required"
            >
              *
            </abbr>
          </label>
          <p id={`${name}-error`} className="text-field__error-message">
            {error}
          </p>
        </div>
      )}
    </>
  );
}
