import { atom } from 'recoil';

export interface Shoot {
  username: string;
  imgUrl: string;
  content: string;
  timestamp: string;
}

export interface BlockItem {
  text: string;
  count: number;
  shoots: Shoot[];
}

export interface ArchiveItem {
  text: string;
  count: number;
  blocks: BlockItem[];
}

export const archiveItemsAtom = atom<ArchiveItem[]>({
  key: 'archiveItemsAtom',
  default: [
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
      {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
          ],
        },
      ],
    },
    {
      text: '홈페이지 구성',
      count: 10,
      blocks: [
        {
          text: '진행중_홈화면 UI',
          count: 1,
          shoots: [
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 19,
      blocks: [
        {
          text: '완료_메인 구성',
          count: 1,
          shoots: [
            {
              username: '류남정',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요?',
              timestamp: '12 hours ago',
            },
            {
              username: 'JIN',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '넵',
              timestamp: 'Just now',
            },
            {
              username: 'CRYSTAR',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아니에요',
              timestamp: '3 hours ago',
            },
            {
              username: 'TAEK',
              imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
              content: '아닌데요',
              timestamp: '10 hours ago',
            },
          ],
        },
      ],
    },
  ],
});
