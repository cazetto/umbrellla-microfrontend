import { createMachine } from 'xstate';

const StateMachineSingleton = (function () {
  let instance: any;

  function createInstance() {
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

    return sidebarStateMachine;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const sidebarStateMachine = StateMachineSingleton.getInstance();

export default sidebarStateMachine;
