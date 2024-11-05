figma.showUI(__html__, { width: 555, height: 850 });

// 최소화 버튼 클릭 시
figma.ui.onmessage = (msg) => {
    if (msg.type === 'toggleSize') {
      const newHeight = msg.isExpanded ? 850 : 358;
      figma.ui.resize(555, newHeight);
    }
  };