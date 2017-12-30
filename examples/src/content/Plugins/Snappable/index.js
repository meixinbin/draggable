import {Swappable, Plugins} from '../../../scripts/vendor/draggable';

export default function Snappable() {
  const containerSelector = '#Snappable .BlockLayout';
  const containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  const swappable = new Swappable(containers, {
    appendTo: containerSelector,
    mirror: {
      constrainDimensions: true,
    },
    plugins: [Plugins.Snappable],
  });

  // --- Draggable events --- //
  swappable.on('drag:start', evt => {
    if (evt.originalSource.classList.contains('Block--typeStripes')) {
      evt.cancel();
    }
  });

  return swappable;
}
