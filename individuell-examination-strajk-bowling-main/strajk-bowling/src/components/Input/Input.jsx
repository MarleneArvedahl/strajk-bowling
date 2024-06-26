import './Input.scss';

function Input({
  label,
  testId,
  type,
  customClass,
  name,
  handleChange,
  defaultValue,
  disabled,
}) {
  return (
    <section className='input'>
      <label htmlFor={label} className='input__label'>{label}</label>
      <input
        id={label}
        data-testid={testId}
        type={type}
        className={`input__field ${customClass ? customClass : ''}`}
        name={name}
        onChange={handleChange}
        defaultValue={defaultValue ? defaultValue : ''}
        disabled={disabled}
      />
    </section>
  );
}

export default Input;
