import {Sortable, Plugins} from '../../../scripts/vendor/draggable';

export default function Snappable() {
  const containers = document.querySelectorAll('#Snappable .BlockLayout');

  if (containers.length === 0) {
    return false;
  }

  const sortable = new Sortable(containers, {
    draggable: '.Block--isDraggable',
    swapAnimation: {
      duration: 200,
      easingFunction: 'ease-in-out',
    },
    plugins: [Plugins.SwapAnimation],
    // mirror: { constrainDimensions: true, },
  });

  // --- Draggable events --- //
  sortable.on('drag:start', evt => {
    // MAX WILL UPDATE THE LIB TO HAVE A NEW CLASS I CAN HOOK INTO
    evt.originalSource.classList.add('Block--isCloned');
  });

  sortable.on('drag:stop', evt => {
    evt.originalSource.classList.remove('Block--isCloned');
  });

  return sortable;
}
