import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../PostCommentTypes';

const usePostCommentCreate = (
  postId: number,
  options?: MutationOptions<PostComment>,
) => {
  const {mutate, loaging, error} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(postId, message),
    options,
  );

  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    createComment,
    loaging,
    error,
  };
};

export {usePostCommentCreate};
