export const labsTree = {
  id: 'root-1',
  name: 'Laboratories',
  type: 'root',
  children: [
    {
      id: 'lab-1',
      name: 'Lab 1',
      type: 'laboratory',
      children: [
        {
          id: 'layout-a',
          name: 'Layout A',
          type: 'layout',
          children: [
            { id: 'scenario-1', name: 'Scenario 1', type: 'scenario' },
            { id: 'scenario-2', name: 'Scenario 2', type: 'scenario' },
          ],
        },
        {
          id: 'layout-b',
          name: 'Layout B',
          type: 'layout',
          children: [
            { id: 'scenario-3', name: 'Scenario 3', type: 'scenario' },
          ],
        },
      ],
    },
    {
      id: 'lab-2',
      name: 'Lab 2',
      type: 'laboratory',
      children: [
        {
          id: 'layout-x',
          name: 'Layout X',
          type: 'layout',
          children: [
            { id: 'scenario-alpha', name: 'Scenario Alpha', type: 'scenario' },
            { id: 'scenario-beta', name: 'Scenario Beta', type: 'scenario' },
          ],
        },
      ],
    },
  ],
};
