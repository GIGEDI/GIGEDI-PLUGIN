import { atom } from 'recoil';

export interface BlockItem {
  text: string;
  count: number;
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
      count: 3,
      blocks: [
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
        { text: '하단 탭', count: 10 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 3,
      blocks: [
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 3,
      blocks: [
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 3,
      blocks: [
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 3,
      blocks: [
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 3,
      blocks: [
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 3,
      blocks: [
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 3,
      blocks: [
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
    {
      text: '메인페이지 플로우',
      count: 3,
      blocks: [
        { text: '완료_메인 구성', count: 1 },
        { text: '진행중_홈화면 UI', count: 1 },
        { text: '하단 탭', count: 10 },
      ],
    },
    {
      text: '디자인시스템 시안1',
      count: 12,
      blocks: [
        { text: '버튼 스타일링', count: 5 },
        { text: '컬러 조정', count: 3 },
      ],
    },
  ],
});
