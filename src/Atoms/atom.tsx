import { atom } from 'recoil';

export const selectedArticleId = atom({
  key: 'selectedArticleId',
  default: '',
});

export const viewMode = atom({
  key: 'viewMode',
  default: 'card',
});

// NEED TO IMPLEMENT :: type add
export const UpdateCommentId = atom({
  key: 'updateCommentId',
  default: 0, // 0일경우 수정 안함
});

export const DeleteCommentId = atom({
  key: 'deleteCommentId',
  default: 0, // 0일경우 삭제 안함
});

export const NewCommentId = atom({
  key: 'newCommentId',
  default: 0,
});
