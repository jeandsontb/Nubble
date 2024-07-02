import {Post} from '@domain';

import {
  BoxDinamic,
  IconDinamic,
  IconDinamicProps,
  TextDinamic,
  TouchableOpacityDinamic,
} from '@components';

type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: PostActionsProps) {
  function likePost() {}

  function navigateToComment() {}

  function favoritePost() {}

  return (
    <BoxDinamic flexDirection="row" mt="s16">
      <Item
        marked
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
        onPress={likePost}
      />

      <Item
        marked={false}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
        onPress={navigateToComment}
      />

      <Item
        marked={false}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
        onPress={favoritePost}
      />
    </BoxDinamic>
  );
}

interface ItemProps {
  onPress(): void;
  marked: boolean;
  text: number;
  icon: {
    default: IconDinamicProps['name'];
    marked: IconDinamicProps['name'];
  };
}

function Item({onPress, icon, marked, text}: ItemProps) {
  return (
    <TouchableOpacityDinamic
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <IconDinamic
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <TextDinamic preset="paragraphSmall" ml="s4" bold>
          {text}
        </TextDinamic>
      )}
    </TouchableOpacityDinamic>
  );
}
