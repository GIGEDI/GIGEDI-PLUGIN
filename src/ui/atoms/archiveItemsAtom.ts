import { atom } from 'recoil';

export interface Task {
  name: string;
  text: string;
  page: string;
  time: string;
}

export interface TasksState {
  yet: Task[];
  doing: Task[];
  done: Task[];
  mentioned: Task[];
}

export interface Shoot {
  username: string;
  imgUrl: string;
  content: string;
  timestamp: string;
}

// 블록 생성 -> 좌표 
export interface BlockItem {
  text: string;
  count: number;
  tasks: TasksState;
  shoots: Shoot[];
  coordinates?: { x: number; y: number; width: number; height: number };
  node?: SceneNode;
}

export interface ArchiveItem {
  text: string;
  count: number;
  blocks: BlockItem[];
}

// 블록 생성 함수 (241124_디자인_UI 디자인 최종(진행중) 전용)
const createBlocksForUIFinal = (): BlockItem[] => {
  const sharedShoots: Shoot[] = [
    {
      username: '류남정',
      imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
      content: `상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?`,
      timestamp: '12 hours ago',
    },
    {
      username: '기개디',
      imgUrl: 'https://github.com/user-attachments/assets/7ad458c5-3246-45db-b436-f8e30352e806',
      content: `아뇨 아직이요`,
      timestamp: '10 hours ago',
    },
  ];

  return [
    {
      text: '온보딩',
      count: 2,
      tasks: {
        yet: [],
        doing: [],
        done: [],
        mentioned: [],
      },
      shoots: sharedShoots,
    },
    {
      text: '메인홈',
      count: 3,
      tasks: {
        yet: [],
        doing: [],
        done: [],
        mentioned: [],
      },
      shoots: [
        {
          username: '성이',
          imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
          content: `@yesme@가언 메인홈 최종시안입니다! 확인해보시고 말씀해주세요!`,
          timestamp: '12 hours ago',
        },
        {
          username: '가언',
          imgUrl: 'https://github.com/user-attachments/assets/7ad458c5-3246-45db-b436-f8e30352e806',
          content: `@성이 와이어프레임과 살짝 다른것 같은데요? 수정해주세요!`,
          timestamp: '10 hours ago',
        },
        {
          username: '성이',
          imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
          content: `@가언 헉 얼른 수정할게요~ `,
          timestamp: '9 hours ago',
        },
      ],
    },
    {
      text: '기능 1.',
      count: 2,
      tasks: {
        yet: [],
        doing: [],
        done: [],
        mentioned: [],
      },
      shoots: sharedShoots,
    },
    {
      text: '기능 2.',
      count: 2,
      tasks: {
        yet: [],
        doing: [],
        done: [],
        mentioned: [],
      },
      shoots: sharedShoots,
    },
    {
      text: '기능 3.',
      count: 2,
      tasks: {
        yet: [],
        doing: [],
        done: [],
        mentioned: [],
      },
      shoots: sharedShoots,
    },
    {
      text: '결제창',
      count: 2,
      tasks: {
        yet: [],
        doing: [],
        done: [],
        mentioned: [],
      },
      shoots: sharedShoots,
    },
  ];
};

const createBlocks = (blockCount: number): BlockItem[] => {
  const blocks: BlockItem[] = [];
  for (let i = 1; i <= blockCount; i++) {
    blocks.push({
      text: `완료_메인 구성_${i}`,
      count: i,
      tasks: {
        yet: [
          { name: 'JuahRyu', text: `명세서 검토 완료됐나요?`, page: '메인페이지 플로우 | ', time: '1 hour ago' },
          { name: 'yesme', text: `디자인 수정 완료했습니다.`, page: '메인페이지 플로우 | ', time: '1 hour ago' },
        ],
        doing: [
          { name: '성이', text: '플로우 다 확인했나요?', page: '메인페이지 플로우 | ', time: '2 hours ago' },
          { name: 'SUJIN.K', text: '디자인 검토 완료했습니다.', page: '메인페이지 플로우 | ', time: '5 hours ago' },
        ],
        done: [
          { name: '가언', text: '작업이 모두 완료되었습니다.', page: '메인페이지 플로우 | ', time: '1 day ago' },
          { name: 'TAEK', text: '코드 리뷰가 끝났습니다.', page: '메인페이지 플로우 | ', time: '3 days ago' },
        ],
        mentioned: [
          { name: '가언', text: '@SUJIN.K 최신 디자인 시스템 확인 부탁드립니다.', page: '메인페이지 플로우 | ', time: '4 hours ago' },
          { name: 'TAEK', text: '@JIN 변경 사항 공유합니다.', page: '메인페이지 플로우 | ', time: '1 day ago' },
        ],
      },
      shoots: [
        {
          username: '성이',
          imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
          content: `@yesme@가언 메인홈 최종시안입니다! 확인해보시고 말씀해주세요!`,
          timestamp: '12 hours ago',
        },
        {
          username: '가언',
          imgUrl: 'https://github.com/user-attachments/assets/7ad458c5-3246-45db-b436-f8e30352e806',
          content: `@성이 와이어프레임과 살짝 다른것 같은데요? 수정해주세요!`,
          timestamp: '10 hours ago',
        },
        {
          username: '성이',
          imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
          content: `@가언 헉 얼른 수정할게요~ `,
          timestamp: '9 hours ago',
        },
      ],
    });
  }
  return blocks;
};

const createArchives = (): ArchiveItem[] => {
  return [
    {
      text: '241121_기획_와이어프레임 최종(완료)',
      count: 19,
      blocks: createBlocks(19),
    },
    {
      text: '241124_디자인_UI 디자인 최종(진행중)',
      count: 6,
      blocks: createBlocksForUIFinal(),
    },
    {
      text: '241127_디자인_디자인시스템 시안(완료)',
      count: 1,
      blocks: createBlocks(1),
    },
    {
      text: '241128_디자인_컬리시스템(완료)',
      count: 4,
      blocks: createBlocks(4),
    },
  ];
};

export const archiveItemsAtom = atom<ArchiveItem[]>({
  key: 'archiveItemsAtom',
  default: createArchives(),
});
