export function nameExtract(name) {
  if (name != null) {
    let fullname = name.trim();
    let x = fullname.lastIndexOf(" ");
    let firstname = fullname.slice(0, x);
    let lastname = fullname.slice(x + 1, fullname.length);
    return [firstname, lastname];
  } else {
    return console.error("error");
  }
}

export function blob2Image(blob) {
  return `data:image/jpeg;base64,${blob}`;
}

export function dateFormat(timestamp) {
  const date = new Date(timestamp);
  const stringDate = date.toString();
  return `${stringDate.substring(0, 3)} ${date.getDate()} ${stringDate.substring(
    4,
    7
  )} ${date.getFullYear()}`;
}

export function timeFormat(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
}

export function birthDayFormat(timestamp) {
  const date = new Date(timestamp);
  const stringDate = date.toString();
  return `${date.getDate()} ${stringDate.substring(4, 7)} ${date.getFullYear()}`;
}

export function convertStringtoArray(str) {
  if (str.indexOf(",") > 0) {
    return str.split(",");
  } else return [str];
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
