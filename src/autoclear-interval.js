export default function (fn, refresh, log = false) {
  let id = null;
  id = setInterval(() => {
    try {
      fn();
    }
    catch (err) {
      if (log)
        console.error(err);
      if (id)
        clearInterval(id);
    }
  }, refresh);
}
