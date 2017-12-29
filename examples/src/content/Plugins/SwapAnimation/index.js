import {Sortable, Plugins} from '../../../scripts/vendor/draggable';

export default function SwapAnimation() {
  const containers = document.querySelectorAll('#SwapAnimation .BlockLayout');

  if (containers.length === 0) {
    return false;
  }

  const sortable = new Sortable(containers, {
    draggable: '.Block--isDraggable',
    mirror: {
      constrainDimensions: true,
    },
    plugins: [Plugins.SwapAnimation],
    swapAnimation: {
      duration: 200,
      easingFunction: 'ease-in-out',
    },
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
