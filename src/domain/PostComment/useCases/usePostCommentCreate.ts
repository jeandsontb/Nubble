import {useState} from 'react';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../PostCommentTypes';

interface Options {
  onSuccess?(data: PostComment): void;
  onError?(message: string): void;
}

const usePostCommentCreate = (postId: number, options?: Options) => {
  const [loaging, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(false);

  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (err) {
      setError(true);
      if (options?.onError) {
        options.onError('Erro ao criar comentário');
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loaging,
    error,
  };
};

export {usePostCommentCreate};
