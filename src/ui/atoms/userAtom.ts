import { atom } from 'recoil';

interface UserState {
  username: string;
  email: string;
  imgUrl: string; 
  userId: string;
}

export const userAtom = atom<UserState>({
  key: 'userAtom',
  default: {
    username: '',
    email: '',
    imgUrl: '',
    userId: '',
  },
});
