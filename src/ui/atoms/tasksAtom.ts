import { atom } from 'recoil';

interface Task {
  name: string;
  text: string;
  page: string;
  time: string;
}

interface TasksState {
  yet: Task[];
  doing: Task[];
  done: Task[];
  mentioned: Task[];
}

export const tasksAtom = atom<TasksState>({
  key: 'tasksAtom',
  default: {
    yet: [
      { name: 'JuahRyu', text: `와프 검토 완료됐나요?`, page: '241121_기획_와이어프레임 최종(완료)', time: '1 hour ago' },
    ],
    doing: [
      { name: '성이', text: '와이어프레임과 살짝 다른것 같은데요? 수정해주세요!', page: '241124_디자인_UI 디자인 최종(진행중) | ', time: '2 hours ago' },
      { name: 'SUJIN.K', text: '디자인 검토 완료했습니다.', page: '메인페이지 플로우 | ', time: '5 hours ago' },
    ],
    done: [
      { name: '성이', text: '@yesme @가언 메인홈 최종시안입니다! 확인해보시고 말씀해주세요!', page: '241124_디자인_UI 디자인 최종(진행중)', time: '1 day ago' },
    ],
    mentioned: [
      { name: 'GAUN', text: '@SUJIN.K 최신 디자인 시스템 확인 부탁드립니다.', page: '241128_디자인_컬리시스템(완료)', time: '4 hours ago' },
    ],
  },
});
