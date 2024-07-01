import React from 'react';

import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {ThemeColorTypes} from '../../theme/theme';
import {useAppThemeCustom} from '../../hooks/useAppTheme';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {ArrowRightIcon} from '../../assets/icons/ArrowRightIcon';
import {BellIcon} from '../../assets/icons/BellIcon';
import {BellOnIcon} from '../../assets/icons/BellOnIcon';
import {BookmarkIcon} from '../../assets/icons/BookmarkIcon';
import {BookmarkFillIcon} from '../../assets/icons/BookmarkFillIcon';
import {CameraIcon} from '../../assets/icons/CameraIcon';
import {ChatIcon} from '../../assets/icons/ChatIcon';
import {ChatOnIcon} from '../../assets/icons/ChatOnIcon';
import {CheckIcon} from '../../assets/icons/CheckIcon';
import {ChevronRightIcon} from '../../assets/icons/ChevronRightIcon';
import {CommentIcon} from '../../assets/icons/CommentIcon';
import {FlashOnIcon} from '../../assets/icons/FlashOnIcon';
import {FlashOffIcon} from '../../assets/icons/FlashOffIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';
import {HeartFillIcon} from '../../assets/icons/HeartFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {MessageIcon} from '../../assets/icons/MessageIcon';
import {MoreIcon} from '../../assets/icons/MoreIcon';
import {NewPostIcon} from '../../assets/icons/NewPostIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {SendIcon} from '../../assets/icons/SendIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';
import {TrashIcon} from '../../assets/icons/TrashIcon';
import {Pressable} from 'react-native';
import {CheckRoundIcon} from '../../assets/icons/CheckRound';
import {MessageRoundIcon} from '../../assets/icons/MessageRoundIcon';

export type IconDinamicBase = {
  size?: number;
  color?: string;
};

export interface IconDinamicProps {
  name: IconKeyDinamic;
  color?: ThemeColorTypes;
  size?: number;
  onPress?(): void;
}

const IconDinamic = ({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconDinamicProps) => {
  const {colors} = useAppThemeCustom();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
};

export {IconDinamic};

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  checkRound: CheckRoundIcon,
  chevronRight: ChevronRightIcon,
  comment: CommentIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  flashOn: FlashOnIcon,
  flashOff: FlashOffIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  messageRound: MessageRoundIcon,
  more: MoreIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  send: SendIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconTypeDinamic = typeof iconRegistry;
type IconKeyDinamic = keyof IconTypeDinamic;