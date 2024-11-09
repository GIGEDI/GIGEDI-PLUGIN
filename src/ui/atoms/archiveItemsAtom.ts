import { atom } from 'recoil';

interface ArchiveItem {
  text: string;
  count: number;
}

export const archiveItemsAtom = atom<ArchiveItem[]>({
  key: 'archiveItemsAtom',
  default: [
    { text: '메인페이지 플로우', count: 3 },
    { text: '디자인시스템 시안1', count: 12 },
    { text: '컬러시스템(확정)', count: 7 },
    { text: '메인페이지 플로우', count: 3 },
    { text: '디자인시스템 시안1', count: 12 },
    { text: '컬러시스템(확정)', count: 7 },
    { text: '메인페이지 플로우', count: 3 },
    { text: '디자인시스템 시안1', count: 12 },
    { text: '컬러시스템(확정)', count: 7 },
    { text: '메인페이지 플로우', count: 3 },
    { text: '메인페이지 플로우', count: 3 },
    { text: '디자인시스템 시안1', count: 12 },
    { text: '컬러시스템(확정)', count: 7 },
    { text: '메인페이지 플로우', count: 3 },
    { text: '디자인시스템 시안1', count: 12 },
    { text: '컬러시스템(확정)', count: 7 },
    { text: '메인페이지 플로우', count: 3 },
    { text: '디자인시스템 시안1', count: 12 },
    { text: '메인페이지 플로우', count: 3 },
    /*{ text: '디자인시스템 시안1', count: 12 },*/
  ],
});
