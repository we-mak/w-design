const fixSize = (size: string) => {
  const sizes = {
    xlarge() {
      return "1296px";
    },
    large() {
      return "976px";
    },
    medium() {
      return "856px";
    },
    small() {
      return "616px";
    },
    xsmall() {
      return "496px";
    }
  };
  return sizes[size];
};

export default fixSize;
