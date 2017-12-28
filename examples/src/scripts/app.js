import MobileNav from '../components/MobileNav';
// Home page
import Home from '../content/Home';
// Draggable
import DragEvents from '../content/Draggable/DragEvents';
// import RestrictAxis from '../content/Draggable/RestrictAxis';
// Droppable
import OneAndOnly from '../content/Droppable/OneAndOnly';
// Sortable
import SimpleList from '../content/Sortable/SimpleList';
import Transformed from '../content/Sortable/Transformed';
import MultipleContainers from '../content/Sortable/MultipleContainers';
// Swappable
import FloatedLayout from '../content/Swappable/FloatedLayout';
import GridLayout from '../content/Swappable/GridLayout';
// Plugins
import Collidable from '../content/Plugins/Collidable';
import Snappable from '../content/Plugins/Snappable';
import SwapAnimation from '../content/Plugins/SwapAnimation';

// Initialize navigation
const navActivator = document.getElementById('MobileNavActivator');

if (navActivator) {
  const mobileNav = new MobileNav(navActivator); // eslint-disable-line no-unused-vars
}

// Initialize all examples
Home();
DragEvents();
// RestrictAxis();
OneAndOnly();
SimpleList();
Transformed();
MultipleContainers();
FloatedLayout();
GridLayout();
Collidable();
Snappable();
SwapAnimation();
