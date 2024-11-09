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
    yet: [],
    doing: [
      { name: 'JIN', text: '플로우 다 확인했나요?', page: '메인페이지 플로우 | ', time: '2 hours ago' },
      { name: 'SUJIN.K', text: '디자인 검토 완료했습니다.', page: '메인페이지 플로우 | ', time: '5 hours ago' },
    ],
    done: [
      { name: 'CRYSTAL', text: '작업이 모두 완료되었습니다.', page: '메인페이지 플로우 | ', time: '1 day ago' },
      { name: 'TAEK', text: '코드 리뷰가 끝났습니다.', page: '메인페이지 플로우 | ', time: '3 days ago' },
    ],
    mentioned: [
      { name: 'GAUN', text: '@SUJIN.K 최신 디자인 시스템 확인 부탁드립니다.', page: '메인페이지 플로우 | ', time: '4 hours ago' },
      { name: 'TAEK', text: '@JIN 변경 사항 공유합니다.', page: '메인페이지 플로우 | ', time: '1 day ago' },
    ],
  },
});
