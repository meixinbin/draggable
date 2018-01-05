import {Droppable, Plugins} from '../../../scripts/vendor/draggable';

export default function Collidable() {
  const containerSelector = '#Collidable .BlockLayout';
  const containers = document.querySelectorAll(containerSelector);
  const wallClass = 'CollidableWall';
  const walls = document.querySelectorAll(`.${wallClass}`);

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
    if (collidingElement.classList.contains(wallClass)) {
      walls.forEach(wall => wall.classList.add('isColliding'));
    } else {
      collidingElement.classList.add('isColliding');
    }
  });

  droppable.on('collidable:out', ({collidingElement}) => {
    if (collidingElement.classList.contains(wallClass)) {
      walls.forEach(wall => wall.classList.remove('isColliding'));
    } else {
      collidingElement.classList.remove('isColliding');
    }
  });

  return droppable;
}
