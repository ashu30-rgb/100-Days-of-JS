const generateHash = (str) => {
    if (str.trim().length == 0 || str.trim().length > 280) {
      return false;
    }
    let res = "";
    str.trim().split(" ").map((item) => {
        res = res + item.charAt(0).toUpperCase() + item.slice(1);
      });
    return "#" + res;
  };
  
  console.log(generateHash("Hello how are you"));
  