export async function validateForm(e) {
  const form = e.target;

  if (form.reportValidity()) {
    e.preventDefault();

    const resource = form.action;
    const options = {
      method: form.method,
      body: new FormData(form), // 👈 Magic!
    };

    const r = await fetch(resource, options);

    if (!r.ok) {
      // @TODO: Show an error message
      return;
    }

    console.log('hiiii');
  } else {
    // form is invalid - cancel submit
    e.preventDefault();
  }
}

export function handleInvalidField(event) {
  const field = event.target;
  setFieldValidity(field);
  event.preventDefault();
}

export function handleFieldBlur(event, visitedFields, setVisitedFields) {
  const field = event.target;

  if (!visitedFields.includes(field)) {
    setVisitedFields([...visitedFields, field]);
  }
  field.reportValidity();
}

export function handleFieldInput(event, visitedFields) {
  const field = event.target;
  //   console.log(field.getAttribute('aria-invalid') === 'true');
  console.log(field);
  if (!visitedFields.includes(field) && !field.getAttribute('aria-invalid'))
    return;
  setFieldValidity(field);
}

export function setFieldValidity(field) {
  if (!field.validity.valid) {
    errorContainer(field).style.visibility = 'visible';
    field.setAttribute('aria-invalid', 'true');
  } else {
    errorContainer(field).style.visibility = 'hidden';
    field.removeAttribute('aria-invalid');
  }
}

export function errorContainer(field) {
  const errorContainerId = field
    .getAttribute('aria-describedby')
    .split(' ')
    .find((id) => id.includes('error'));
  return document.getElementById(errorContainerId);
}
