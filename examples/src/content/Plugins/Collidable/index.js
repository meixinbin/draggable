import {Droppable, Plugins} from '../../../scripts/vendor/draggable';

export default function Collidable() {
  const containerSelector = '#Collidable .BlockLayout';
  const containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  const droppable = new Droppable(containers, {
    draggable: '.Block--isDraggable',
    droppable: '.BlockWrapper--isDroppable',
    collidables: '.CollidableObstacle',
    appendTo: containerSelector,
    mirror: {
      constrainDimensions: true,
    },
    plugins: [Plugins.Collidable],
  });

  // --- Draggable events --- //
  droppable.on('collidable:in', ({collidingElement}) => {
    collidingElement.classList.add('isColliding');
  });

  droppable.on('collidable:out', ({collidingElement}) => {
    collidingElement.classList.remove('isColliding');
  });

  return droppable;
}
