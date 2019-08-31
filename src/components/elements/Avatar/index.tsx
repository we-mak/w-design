import * as React from "react";
import { AvatarWrapper, AvatarDataInit, AvatarImage, PresenceMark } from "./Styled";
import { firstLetter, randomProperty, filterObject } from "../../../common/helpers";
import { colors } from "../../../common/styleUtils/colors";
import { AvatarProps } from "./types";

const Avatar = ({
  size = "md",
  avatarUrl,
  dataInitial = "We mak",
  alt,
  presence,
  ...rest
}: AvatarProps) => {
  const [backgroundColor, setBackgroundColor] = React.useState("");

  React.useLayoutEffect(() => {
    if (!avatarUrl) {
      setBackgroundColor(randomProperty(filterObject(colors, ["WHITE", "BLACK", "N1"])));
    }
  }, []);

  return (
    <AvatarWrapper style={{ backgroundColor }} size={size} {...rest}>
      {dataInitial && <AvatarDataInit size={size}>{firstLetter(dataInitial)}</AvatarDataInit>}
      {avatarUrl && <AvatarImage data-src={avatarUrl} alt={alt} />}
      {presence && <PresenceMark presence={presence} size={size} />}
    </AvatarWrapper>
  );
};

export default React.memo(Avatar);
