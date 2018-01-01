import {Sortable} from '../../../scripts/vendor/draggable';

export default function MultipleContainers() {
  const containers = document.querySelectorAll('#MultipleContainers .Container');

  if (containers.length === 0) {
    return false;
  }

  const sortable = new Sortable(containers, {
    draggable: '.StackedListItem--isDraggable',
    mirror: {
      constrainDimensions: true,
    },
  });

  const containerTwo = document.getElementById('ContainerTwo');
  const containerTwoCapacity = 3;
  let currentMediumChildren;
  let lastOverContainer;

  // --- Draggable events --- //
  sortable.on('drag:start', evt => {
    evt.originalSource.classList.add('StackedListItem--isCloned');
    currentMediumChildren = containerTwo.querySelectorAll('.StackedListItem').length;
  });

  // This suprisingly does not work...
  sortable.on('drag:over', evt => {
    if (currentMediumChildren !== containerTwoCapacity) {
      return;
    }

    if (evt.overContainer === containerTwo) {
      evt.cancel();
      console.log('#ContainerTwo capacity reached:', currentMediumChildren);
    }
  });

  sortable.on('sortable:sorted', evt => {
    if (lastOverContainer === evt.dragEvent.overContainer) {
      return;
    }

    evt.dragEvent.overContainer.appendChild(evt.dragEvent.mirror);

    const overRect = evt.dragEvent.over.getBoundingClientRect();

    evt.dragEvent.mirror.style.width = `${overRect.width}px`;
    evt.dragEvent.mirror.style.height = `${overRect.height}px`;

    lastOverContainer = evt.dragEvent.overContainer;
  });

  sortable.on('drag:stop', evt => {
    evt.originalSource.classList.remove('StackedListItem--isCloned');
  });

  return sortable;
}
