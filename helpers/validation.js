import Router from 'next/router';

export async function validateForm(e) {
  const form = e.target;

  if (form.reportValidity()) {
    e.preventDefault();

    const resource = new URL(form.action || window.location.href);
    const formData = new FormData(form);

    const options = {
      method: form.method || 'get',
      headers: {
        Accept: 'application/json',
      },
    };

    if (options.method === 'get') {
      resource.search = new URLSearchParams(formData);
    } else {
      if (form.enctype === 'multipart/form-data') {
        options.body = formData;
      } else {
        options.body = JSON.stringify(Object.fromEntries(formData));
        options.headers['Content-Type'] = 'application/json';
      }
    }

    const r = await fetch(resource, options);

    if (!r.ok) {
      Router.push('/error');
      return;
    }

    const json = await r.json();
    if (json.data) {
      Router.push('/thanks');
    }
  } else {
    e.preventDefault();
  }
}

export function handleInvalidField(event) {
  event.preventDefault();

  const field = event.target;
  setFieldValidity(field);
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
