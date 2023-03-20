const validation = (inputs) => {
  let errors = {};

  const regexName = /^[a-zA-Z0-9\s]{1,18}$/;
  const regexDescription = /^[,.;:?!-_a-zA-ZÀ-ÿ0-9\s]{10,200}$/u;
  const regexUrl = /(http[s]?:\/\/.*\.(?:png|jpg|webp|gif|svg|jpeg))/i;

  const regexDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  const regexNumber = /^(?:[1-4](?:\.\d+)?|5(?:\.0+)?)$/;

  if (!regexName.test(inputs.name) || !inputs.name)
    errors.name = "Must contain a name, maximum 18 characters";
  if (!regexDescription.test(inputs.description) || !inputs.description)
    errors.description =
      "Must contain a description, from 10 to 200 characters";
  if (!regexUrl.test(inputs.image)) errors.image = "Must be a valid url";
  if (!regexDate.test(inputs.released))
    errors.released = "Must contain a valid date (YYYY-MM-DD)";
  if (!regexNumber.test(inputs.rating))
    errors.rating = "Must be a number between 1.0 and 5.0";
  if (!inputs.platforms.length)
    errors.platforms = "Select one or more platforms";
  if (!inputs.genres.length) errors.genres = "Select one or more genres";

  return errors;
};

export default validation;
