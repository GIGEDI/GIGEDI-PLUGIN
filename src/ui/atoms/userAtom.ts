// store/userAtom.ts
import { atom } from 'recoil';

interface UserState {
  username: string;
  email: string;
  imgUrl: string; // 속성 이름을 소문자로 통일
  userId: string;
}

// 초기 상태 정의
export const userAtom = atom<UserState>({
  key: 'userAtom',
  default: {
    username: '',
    email: '',
    imgUrl: '',
    userId: '',
  },
});
