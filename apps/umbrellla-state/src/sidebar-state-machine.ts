import { createMachine } from 'xstate';

const sidebarStateMachine = createMachine({
  id: 'sidebar',
  initial: 'collapsed',
  states: {
    collapsed: {
      on: { TOGGLE: 'expanded' },
    },
    expanded: {
      on: { TOGGLE: 'collapsed' },
    },
  },
});

console.log('READ STATE MACHINE FILE');

export default sidebarStateMachine;
