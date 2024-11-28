figma.showUI(__html__, { width: 555, height: 850 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'toggleSize') {
    const newHeight = msg.isExpanded ? 850 : 358;
    figma.ui.resize(555, newHeight);
  }

  if (msg.type === 'getSelection') {
    const selection = figma.currentPage.selection.map((node) => ({
      id: node.id,
      name: node.name,
      type: node.type,
      x: node.absoluteBoundingBox?.x || 0,
      y: node.absoluteBoundingBox?.y || 0,
      width: node.absoluteBoundingBox?.width || 0,
      height: node.absoluteBoundingBox?.height || 0,
    }));
    figma.ui.postMessage({ type: 'selectionData', data: selection });
  }

  if (msg.type === 'scrollTo') {
    const { id } = msg.coordinates; // 블록 노드의 ID를 전달받음
    const nodeToScroll = figma.getNodeById(id) as SceneNode | null; // ID를 이용해 SceneNode를 가져옴

    if (nodeToScroll) {
      figma.viewport.scrollAndZoomIntoView([nodeToScroll]); // SceneNode를 사용하여 뷰포트 이동
    } else {
      console.warn('Node with the specified ID not found');
    }
  }
};

