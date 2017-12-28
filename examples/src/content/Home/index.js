import {Draggable} from '../../scripts/vendor/draggable';
import Plate from '../../components/Plate';

export default function Home() {
  const containerSelector = '#Home .PlateWrapper';
  const container = document.querySelector(containerSelector);

  if (!container) {
    return false;
  }

  const draggable = new Draggable(container, {
    draggable: '.Plate',
  });
  const plates = new Plate(container);

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    plates.setThreshold();
    plates.setInitialMousePosition(evt.sensorEvent);
  });

  draggable.on('drag:move', evt => {
    plates.dragWarp(evt.source, evt.sensorEvent);
  });

  draggable.on('drag:stop', () => {
    plates.resetWarp();
  });

  return draggable;
}