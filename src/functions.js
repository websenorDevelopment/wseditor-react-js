export const BaW = (eleId) => {
    const image = document.getElementById(eleId);
    if (image.style.filter !== "") {
      if (image.style.filter.includes("grayscale")) {
        if (image.style.filter.includes("grayscale(1)")) {
          image.style.filter = `${image.style.filter.replace(
            "grayscale(1)",
            "grayscale(0)"
          )}`;
        } else {
          image.style.filter = `${image.style.filter.replace(
            "grayscale(0)",
            "grayscale(1)"
          )}`;
        }
      } else {
        image.style.filter = `${image.style.filter} grayscale(1)`;
      }
    } else {
      image.style.filter = "grayscale(1)";
    }
  };
  