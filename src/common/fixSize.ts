export const fixSize = (size: string) => {
  const sizes: any = {
    xl() {
      return "1296px";
    },
    lg() {
      return "976px";
    },
    md() {
      return "856px";
    },
    sm() {
      return "616px";
    },
    xs() {
      return "496px";
    }
  };
  return sizes[size];
};
